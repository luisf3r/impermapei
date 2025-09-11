# Impermapei - Especialistas en Impermeabilización MAPEI

Repositorio oficial del sitio web de Impermapei, empresa líder en soluciones de impermeabilización con productos MAPEI para residencias, comercios e industrias en México. Con más de 40 años de experiencia y un equipo de instaladores certificados por MAPEI.

## 🏗️ Acerca del Proyecto

Este sitio web está construido utilizando [Astro](https://astro.build), un moderno generador de sitios estáticos que ofrece rendimiento excepcional y SEO optimizado. El diseño está enfocado en mostrar los productos y servicios de impermeabilización MAPEI de manera profesional y atractiva, destacando la tecnología italiana con producción local.

### 🎯 Objetivos del Sitio

- Presentar la gama completa de productos MAPEI para impermeabilización
- Destacar impermeabilizantes líquidos, membranas líquidas y mantos asfálticos
- Mostrar proyectos realizados y casos de éxito con productos MAPEI
- Facilitar el contacto con expertos técnicos certificados
- Proporcionar información técnica detallada sobre cada producto MAPEI
- Optimizar la conversión de visitantes en clientes

## 🌟 Características Principales

### Diseño y UX
- **Diseño moderno y responsivo** - Adaptable a todos los dispositivos
- **Optimizado para velocidad** - Carga rápida y experiencia fluida
- **SEO optimizado** - Estructura semántica y metadatos completos
- **Accesibilidad** - Cumple con estándares de accesibilidad web

### Funcionalidades
- **Catálogo de productos MAPEI** - Información detallada de impermeabilizantes líquidos, membranas líquidas y mantos asfálticos
- **Galería de proyectos** - Casos de éxito y aplicaciones reales con productos MAPEI
- **Formulario de contacto inteligente** - Captura de leads optimizada con asesoría técnica gratuita
- **Integración WhatsApp** - Contacto directo con expertos certificados por MAPEI
- **Secciones informativas** - Guías técnicas y beneficios de productos con tecnología italiana

## 🚀 Estructura del Proyecto

```text
impermapei/
├── public/
│   ├── favicon.svg        # Favicon del sitio
│   └── images/
│       ├── productos/     # Imágenes de productos MAPEI
│       │   ├── mapelastic-smart-mapei.webp
│       │   ├── flexo-s6-mapei.webp
│       │   ├── planiseal-88-mapei.webp
│       │   ├── trend-hs-app-mapei.webp
│       │   └── [otros productos MAPEI]
│       └── impermeabilizantes-gaf-mexico-og.webp
├── src/
│   ├── assets/
│   │   └── images/        # Imágenes optimizadas del sitio
│   │       ├── impermeabilizantes-mapei.webp
│   │       ├── proyecto-mapei.webp
│   │       └── proyectos-de-impermeabilizantes-mapei-en-mexico.webp
│   ├── components/
│   │   ├── ContactForm.astro      # Formulario de contacto
│   │   ├── Footer.astro           # Pie de página
│   │   ├── Header.astro           # Cabecera del sitio
│   │   ├── PhoneList.astro        # Lista de teléfonos
│   │   ├── WhatsAppList.astro     # Lista de WhatsApp
│   │   └── landing/               # Componentes de landing page
│   │       ├── Hero.astro         # Sección principal
│   │       ├── Beneficios.astro   # Beneficios de productos MAPEI
│   │       ├── Introduccion.astro # Por qué elegir MAPEI
│   │       ├── Liquidos.astro     # Impermeabilizantes líquidos
│   │       ├── Membranas.astro    # Membranas líquidas
│   │       ├── MantosAsfalticos.astro # Mantos asfálticos
│   │       ├── Instalacion.astro  # Proceso de instalación
│   │       ├── Nosotros.astro     # Sección corporativa
│   │       ├── ProductsByBrand.astro
│   │       └── Proyectos.astro    # Galería de proyectos
│   ├── content/
│   │   ├── config.ts              # Configuración de contenido
│   │   └── productos/             # Contenido de productos MAPEI
│   │       ├── mapelastic-smart.md
│   │       ├── flexo-s6.md
│   │       ├── planiseal-88.md
│   │       └── [otros productos]
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
cd impermapei

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

### Impermapei
- **Sitio web**: [impermeabilizantesmapei.com](https://www.impermeabilizantesmapei.com)
- **WhatsApp**: +52 33 1079 3173 / +52 55 6037 0930
- **Teléfonos**: 33-3615-1421 / (800) 8909-363
- **Horario**: Lunes a Viernes 10am-6pm, Sábado 10am-2pm
- **Especialidad**: Impermeabilizantes MAPEI con tecnología italiana
- **Experiencia**: Más de 40 años en el mercado mexicano

## 🏆 Productos Destacados

### Categorías de Productos MAPEI
- **Impermeabilizantes Líquidos**: Aquaflex Roof Plus, Aquaflex Techos 3 Años, Aquaflex Techos HR Green
- **Membranas Líquidas**: Mapelastic Smart, Mapelastic Aquadefense
- **Mantos Asfálticos**: Trend HS APP, Flexo S6
- **Sistemas Complementarios**: Planiseal 88

### Ventajas de MAPEI
- ✅ Tecnología italiana con más de 80 años de experiencia global
- ✅ Producción local adaptada al clima mexicano
- ✅ Instaladores certificados por MAPEI
- ✅ Asesoría técnica gratuita especializada
- ✅ Garantía y soporte técnico completo

## 🤝 Contribución

Este proyecto es propiedad de Impermapei. Para contribuciones o reportes de bugs, por favor contacta directamente con el equipo de desarrollo.

## 📝 Licencia

Este proyecto está protegido por derechos de autor. © Impermapei 2025. Todos los derechos reservados.

---

**Desarrollado con ❤️ para Impermapei - Especialistas en Impermeabilización MAPEI**
