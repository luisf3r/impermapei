# Guía: Ocultar señales de Astro en el build

Esta guía explica cómo eliminar las señales que revelan el uso de Astro.js en el build de producción.

## ¿Qué señales se ocultan?

| Señal | Descripción |
|-------|-------------|
| `/_astro/` | Carpeta de assets con nombre distintivo |
| `data-astro-cid-*` | Atributos en elementos HTML para CSS con scope |
| `data-astro-source-*` | Atributos de debug (modo desarrollo) |
| Selectores CSS `[data-astro-cid-*]` | Selectores en estilos inline |

---

## Paso 1: Configuración de Astro

Modifica tu archivo `astro.config.mjs` agregando estas opciones:

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // ... tu configuración existente ...
  
  // Minifica el HTML eliminando espacios innecesarios
  compressHTML: true,
  
  // Cambia la carpeta de assets de /_astro/ a /assets/
  build: {
    assets: 'assets',
  },
  
  // ... resto de tu configuración ...
});
```

---

## Paso 2: Script de post-procesamiento

Crea la carpeta `scripts/` en la raíz del proyecto y dentro crea el archivo `clean-astro-attrs.mjs`:

```javascript
// scripts/clean-astro-attrs.mjs

/**
 * Script de post-procesamiento para eliminar señales de Astro del build
 * Elimina atributos data-astro-* del HTML y CSS generado
 */

import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const DIST_DIR = './dist';

// Patrones a eliminar
const HTML_PATTERNS = [
  /\s*data-astro-cid-[a-z0-9]+(?:="[^"]*")?/gi,
  /\s*data-astro-source-file="[^"]*"/gi,
  /\s*data-astro-source-loc="[^"]*"/gi,
  /\[data-astro-cid-[a-z0-9]+\]/gi,  // Selectores CSS en style tags
  /\[\]/g,  // Selectores vacíos resultantes
];

const CSS_PATTERNS = [
  /\[data-astro-cid-[a-z0-9]+\]/gi,
  /\[\]/g,  // Selectores vacíos resultantes
];

/**
 * Obtiene todos los archivos de un directorio recursivamente
 */
async function getFiles(dir, extension) {
  const files = [];
  const items = await readdir(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...await getFiles(fullPath, extension));
    } else if (item.name.endsWith(extension)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Limpia los patrones de un archivo
 */
async function cleanFile(filePath, patterns) {
  let content = await readFile(filePath, 'utf-8');
  let modified = false;
  
  for (const pattern of patterns) {
    const newContent = content.replace(pattern, '');
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
  }
  
  if (modified) {
    await writeFile(filePath, content);
    console.log(`  ✓ Limpiado: ${filePath}`);
  }
  
  return modified;
}

async function main() {
  console.log('\n🧹 Limpiando señales de Astro del build...\n');
  
  let htmlCount = 0;
  let cssCount = 0;
  
  // Limpiar archivos HTML
  const htmlFiles = await getFiles(DIST_DIR, '.html');
  console.log(`📄 Procesando ${htmlFiles.length} archivos HTML...`);
  for (const file of htmlFiles) {
    if (await cleanFile(file, HTML_PATTERNS)) {
      htmlCount++;
    }
  }
  
  // Limpiar archivos CSS
  const cssFiles = await getFiles(DIST_DIR, '.css');
  console.log(`\n🎨 Procesando ${cssFiles.length} archivos CSS...`);
  for (const file of cssFiles) {
    if (await cleanFile(file, CSS_PATTERNS)) {
      cssCount++;
    }
  }
  
  console.log(`\n✅ Completado: ${htmlCount} HTML y ${cssCount} CSS modificados.\n`);
}

main().catch(console.error);
```

---

## Paso 3: Configurar package.json

Modifica los scripts en tu `package.json` para ejecutar la limpieza automáticamente después del build:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro check && astro build && node scripts/clean-astro-attrs.mjs",
    "build:clean": "node scripts/clean-astro-attrs.mjs",
    "preview": "astro preview"
  }
}
```

**Scripts disponibles:**
- `npm run build` - Build completo con limpieza automática
- `npm run build:clean` - Solo ejecutar la limpieza (útil si ya tienes un build)

---

## Paso 4: Ejecutar

```bash
npm run build
```

Verás una salida similar a:

```
🧹 Limpiando señales de Astro del build...

📄 Procesando 4 archivos HTML...
  ✓ Limpiado: dist/index.html

🎨 Procesando 1 archivos CSS...

✅ Completado: 1 HTML y 0 CSS modificados.
```

---

## Verificación

Para verificar que las señales fueron eliminadas:

```bash
# Buscar atributos data-astro en el HTML
grep -r "data-astro" dist/

# Buscar la carpeta _astro
ls dist/ | grep _astro
```

Si no hay resultados, la limpieza fue exitosa.

---

## Checklist

- [ ] Agregar `compressHTML: true` a `astro.config.mjs`
- [ ] Agregar `build: { assets: 'assets' }` a `astro.config.mjs`
- [ ] Crear carpeta `scripts/`
- [ ] Crear archivo `scripts/clean-astro-attrs.mjs`
- [ ] Actualizar script `build` en `package.json`
- [ ] Ejecutar `npm run build` y verificar

---

## Notas importantes

1. **CSS con scope**: Al eliminar los atributos `data-astro-cid-*`, el CSS con scope de Astro se convierte en CSS global. Esto generalmente no causa problemas si usas clases únicas o un framework CSS como Tailwind.

2. **Herramientas de detección**: Aunque estas modificaciones ocultan las señales más obvias, herramientas avanzadas de fingerprinting podrían aún identificar patrones en el código. Para mayor seguridad, considera también:
   - Remover comentarios HTML
   - Ofuscar nombres de clases CSS
   - Minificar JavaScript adicional

3. **Actualizaciones de Astro**: Si Astro introduce nuevos patrones en futuras versiones, puede ser necesario actualizar los regex en el script.

---

## Estructura de archivos

```
tu-proyecto/
├── astro.config.mjs      # Configuración modificada
├── package.json          # Scripts actualizados
├── scripts/
│   └── clean-astro-attrs.mjs  # Script de limpieza
└── dist/                 # Build limpio
```