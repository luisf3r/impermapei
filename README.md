# Impergaf - Especialistas en Impermeabilización GAF

Repositorio oficial del sitio web de Impergaf, empresa líder en soluciones de impermeabilización con productos GAF para residencias, comercios e industrias en México.

## 🏗️ Acerca del Proyecto

Este sitio web está construido utilizando [Astro](https://astro.build), un moderno generador de sitios estáticos que ofrece rendimiento excepcional y SEO optimizado. El diseño está enfocado en mostrar los productos y servicios de impermeabilización GAF de manera profesional y atractiva.

### 🎯 Objetivos del Sitio

- Presentar la gama completa de productos GAF para impermeabilización
- Mostrar proyectos realizados y casos de éxito
- Facilitar el contacto con expertos técnicos
- Proporcionar información técnica detallada sobre cada producto
- Optimizar la conversión de visitantes en clientes

## 🌟 Características Principales

### Diseño y UX
- **Diseño moderno y responsivo** - Adaptable a todos los dispositivos
- **Optimizado para velocidad** - Carga rápida y experiencia fluida
- **SEO optimizado** - Estructura semántica y metadatos completos
- **Accesibilidad** - Cumple con estándares de accesibilidad web

### Funcionalidades
- **Catálogo de productos GAF** - Información detallada de cada impermeabilizante
- **Galería de proyectos** - Casos de éxito y aplicaciones reales
- **Formulario de contacto inteligente** - Captura de leads optimizada
- **Integración WhatsApp** - Contacto directo con expertos
- **Secciones informativas** - Guías técnicas y beneficios de productos

## 🚀 Estructura del Proyecto

```text
impergaf/
├── public/
│   ├── docs/              # Documentación técnica
│   ├── favicon.svg        # Favicon del sitio
│   └── images/
│       ├── productos/     # Imágenes de productos GAF
│       └── proyectos/     # Imágenes de proyectos realizados
├── src/
│   ├── assets/
│   │   └── images/        # Imágenes optimizadas del sitio
│   ├── components/
│   │   ├── ContactForm.astro      # Formulario de contacto
│   │   ├── Footer.astro           # Pie de página
│   │   ├── Header.astro           # Cabecera del sitio
│   │   ├── PhoneList.astro        # Lista de teléfonos
│   │   ├── WhatsAppList.astro     # Lista de WhatsApp
│   │   └── landing/               # Componentes de landing page
│   │       ├── Hero.astro         # Sección principal
│   │       ├── Beneficios.astro   # Beneficios de productos
│   │       ├── Impermeabilizantes.astro
│   │       ├── Nosotros.astro     # Sección corporativa
│   │       ├── ProductsByBrand.astro
│   │       ├── Proyectos.astro    # Galería de proyectos
│   │       └── [otros componentes]
│   ├── content/
│   │   ├── config.ts              # Configuración de contenido
│   │   └── productos/             # Contenido de productos
│   ├── layouts/
│   │   └── Layout.astro           # Layout principal
│   ├── pages/
│   │   ├── index.astro            # Página principal
│   │   ├── 404.astro             # Página de error
│   │   ├── aviso.astro           # Aviso de privacidad
│   │   ├── gracias.astro         # Página de agradecimiento
│   │   └── robots.txt.ts         # Configuración SEO
│   ├── styles/
│   │   └── global.scss            # Estilos globales
│   └── js/
│       └── main.ts                # Scripts principales
├── astro.config.mjs              # Configuración de Astro
├── tailwind.config.mjs           # Configuración de Tailwind CSS
└── package.json                  # Dependencias del proyecto
```

## 💻 Stack Tecnológico

### Frontend
- **[Astro](https://astro.build)** - Framework principal para sitios estáticos
- **[Tailwind CSS](https://tailwindcss.com)** - Framework de CSS utilitario
- **[SCSS](https://sass-lang.com)** - Preprocesador CSS para estilos avanzados
- **[TypeScript](https://www.typescriptlang.org)** - Tipado estático para JavaScript

### Herramientas de Desarrollo
- **[pnpm](https://pnpm.io)** - Gestor de paquetes rápido y eficiente
- **[Vite](https://vitejs.dev)** - Bundler y servidor de desarrollo
- **[ESLint](https://eslint.org)** - Linter para JavaScript/TypeScript

### Optimización
- **Imágenes optimizadas** - Formato WebP para mejor rendimiento
- **Lazy loading** - Carga diferida de imágenes
- **SEO optimizado** - Metadatos y estructura semántica
- **PWA ready** - Preparado para Progressive Web App

## 🧞 Comandos de Desarrollo

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                  | Acción                                                |
| :----------------------- | :---------------------------------------------------- |
| `pnpm install`           | Instala las dependencias del proyecto                 |
| `pnpm dev`               | Inicia servidor de desarrollo en `localhost:4321`     |
| `pnpm build`             | Compila el sitio para producción en `./dist/`         |
| `pnpm preview`           | Vista previa del sitio compilado                     |
| `pnpm astro --help`      | Muestra ayuda de comandos de Astro                   |

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js 18.0 o superior
- pnpm (recomendado) o npm

### Pasos de instalación
```bash
# Clonar el repositorio
git clone [url-del-repositorio]
cd impergaf

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

## 🎨 Personalización

### Estilos
- Los estilos globales se encuentran en `src/styles/global.scss`
- La configuración de Tailwind CSS está en `tailwind.config.mjs`
- Los componentes utilizan clases de Tailwind CSS para el diseño

### Contenido
- El contenido de productos está en `src/content/productos/`
- Las imágenes se almacenan en `public/images/` y `src/assets/images/`
- La configuración de contenido está en `src/content/config.ts`

## 📞 Información de Contacto

### Impergaf
- **Sitio web**: [impermeabilizantesgaf.com](https://www.impermeabilizantesgaf.com)
- **WhatsApp**: +52 33 1079 3173 / +52 55 6037 0930
- **Teléfonos**: 33-3615-1421 / (800) 8909-363
- **Horario**: Lunes a Viernes 10am-6pm, Sábado 10am-2pm

## 🤝 Contribución

Este proyecto es propiedad de Impergaf. Para contribuciones o reportes de bugs, por favor contacta directamente con el equipo de desarrollo.

## 📝 Licencia

Este proyecto está protegido por derechos de autor. © Impergaf 2025. Todos los derechos reservados.

---

**Desarrollado con ❤️ para Impergaf - Especialistas en Impermeabilización GAF**
