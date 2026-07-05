@AGENTS.md

# Proyecto

**Sergio M. — Portfolio** (`portfolio2026`). Landing page de una sola página (single-page) que presenta a Sergio Michelotti, Backend Engineer especializado en Java, Spring Boot y tecnologías cloud: hero, servicios, experiencia laboral, proyectos destacados y contacto.

- **Objetivo**: sitio de presentación profesional, autocontenido, sin backend propio, optimizado para carga rápida y una estética editorial (tipografía monoespaciada, animaciones sutiles, paleta alto contraste con acento lima/naranja).
- **Propietario**: Sergio Michelotti (`sergiomichelottic@gmail.com`, [LinkedIn](https://www.linkedin.com/in/sergio-michelotti-9b3b22146), [GitHub](https://github.com/Pastelato)).
- **No es** un proyecto con backend, API routes, base de datos ni autenticación. Todo el contenido es estático y tipado en `src/data/`.

---

# Stack

Versiones **exactas** tal como están fijadas en `package.json` — no asumir versiones de entrenamiento, especialmente para Next.js (ver `AGENTS.md`):

| Paquete | Versión |
|---|---|
| next | 16.2.7 |
| react / react-dom | 19.2.4 |
| typescript | ^5 |
| tailwindcss | ^4 (vía `@tailwindcss/postcss`) |
| framer-motion | ^12.40.0 |
| lucide-react | ^1.17.0 |
| eslint | ^9 (flat config) |
| eslint-config-next | 16.2.7 |
| @fontsource/jetbrains-mono, /inter, /syne | ^5.2.x |

**Herramientas**: npm como package manager, Turbopack (bundler por defecto de Next 16, ya no requiere `--turbopack`).

**Deployment**: Vercel. Cada push a la rama principal dispara un deploy de producción sin configuración de build adicional.

**Fuentes**: autoalojadas vía Fontsource (JetBrains Mono para display y body con `font-feature-settings` para desactivar ligaduras en el body). Cero peticiones a Google Fonts u otros CDNs de fuentes.

---

# Arquitectura

- **App Router puro**: solo `src/app/layout.tsx` (shell + metadata) y `src/app/page.tsx` (composición de secciones). No hay `route.ts`, Server Actions, middleware/proxy, ni rutas dinámicas. No agregar ninguna de estas piezas sin que el usuario lo pida explícitamente — el sitio no las necesita.
- **Flujo de datos**: `src/data/*.ts` (arrays tipados) → componente de sección en `src/components/` que los importa y renderiza. No hay fetching, no hay estado global, no hay CMS. Editar contenido significa editar `data/`, no el JSX.
- **Composición de la página** (`src/app/page.tsx`), en este orden fijo: `Navbar` (fixed, fuera de `<main>`) → `Hero` → `NavPill` → `InfoBar` → `Offering` → `Experience` → `CaseStudy` → `Contact` → `Footer`. El orden está comentado en el propio archivo como derivado de un `design.json` original; respetarlo salvo pedido explícito de reordenar secciones.
- **Client vs Server Components**: todo componente con animación (Framer Motion), estado (`useState`) o interacción (`onClick`, `onSubmit`, `useScroll`) lleva `"use client"` en la primera línea. `InfoBar` es el único componente de sección sin `"use client"` (no tiene estado ni motion). Mantener este patrón: no agregar `"use client"` por defecto a componentes que no lo necesitan.
- **Formulario de contacto** (`Contact.tsx`): no envía a ningún backend. Construye un `mailto:` con `encodeURIComponent` y hace `window.location.href = mailto`. Esto es intencional (ver Roadmap del README), no un bug a "arreglar" silenciosamente agregando un backend.

---

# Convenciones

- **Alias de imports**: `@/*` → `./src/*` (definido en `tsconfig.json`). Usar siempre `@/components/...`, `@/data/...`, `@/lib/...`, `@/types/...` en vez de rutas relativas largas.
- **TypeScript estricto** (`strict: true`). Todo el contenido de `data/` está tipado contra interfaces en `src/types/portfolio.ts` (`Service`, `ExperienceItem`, `Project`, `Stat`, `NavLink`, `ContactFormValues`). Si se agrega un campo nuevo a un dato, extender la interfaz correspondiente primero.
- **Componentes**: un archivo por sección visual, `PascalCase.tsx`, `export default function NombreSeccion()`. Sin barrels (`index.ts`) ni carpetas anidadas por componente — es deliberadamente plano.
- **Datos vs tipos vs lib**: `data/` = contenido; `types/` = formas; `lib/` = utilidades compartidas (hoy, solo animaciones). No mezclar contenido dentro de componentes si ya existe un array en `data/` para ese propósito.
- **Animaciones (Framer Motion)**: todas las variantes viven en `src/lib/animations.ts` (`fadeUp`, `staggerContainer`, `staggerItem`, `scaleIn`, `hoverLift`, `revealViewport`). El easing estándar es `[0.22, 1, 0.36, 1]` — cuando un componente necesita una transición ad-hoc que no amerita entrar a `lib/animations.ts`, replica ese mismo array de easing en vez de inventar uno nuevo. Los reveals de scroll usan `whileInView` + `viewport={revealViewport}` (`once: true, amount: 0.25`ish); los staggers manuales de listas (cards, filas) usan `initial/whileInView` por ítem con `delay: index * 0.1` en vez de `staggerContainer` cuando cada item necesita revelarse de forma independiente (ver comentario en `Offering.tsx`).
- **Tailwind v4**: no hay `tailwind.config.js/ts`. Los design tokens (colores, tipografía fluida, radios, spacing) se definen con `@theme` directamente en `src/app/globals.css`. Para agregar un color o tamaño nuevo, extender el bloque `@theme`, no hardcodear valores arbitrarios repetidos por el JSX. Utilidades custom (`container-px`, `.stars-bg`, `.stars-bg-hover`) también viven en `globals.css` vía `@utility` o clases planas — las clases planas se usan a propósito cuando la utilidad debe emitirse siempre, sin depender de la detección de uso de clases de Tailwind.
- **Accesibilidad**: imágenes decorativas llevan `alt=""` + `aria-hidden`; iconos SVG inline decorativos también `aria-hidden`. Respetar siempre `prefers-reduced-motion` (ya manejado globalmente en `globals.css`, no duplicar esa lógica por componente).
- **Iconos**: `lucide-react` para iconografía general; SVGs inline a mano solo para logos de marca (LinkedIn, GitHub, email) que se repiten en `Navbar`, `Footer` e `InfoBar` — si se toca uno, revisar si conviene extraer un componente compartido, pero no hacerlo de forma no solicitada.

---

# Filosofía del proyecto

- **Simplicidad sobre flexibilidad**: es un sitio de una página con contenido semi-estático. No introducir un CMS, i18n, enrutamiento multi-página, backend, base de datos o gestión de estado global a menos que el usuario lo pida explícitamente.
- **Qué se debe mantener**: la estética editorial monoespaciada (JetBrains Mono en todo), la paleta definida en `@theme` (`--color-ink`, `--color-accent` lima, `--color-accent-alt` naranja, fondo oscuro estrellado `stars-bg`), el lenguaje de animación consistente de `lib/animations.ts`, y la tipografía fluida basada en `clamp()`.
- **Qué nunca debe modificarse sin autorización explícita**:
  - El stack (Next.js, React, Tailwind, Framer Motion) y sus versiones mayores.
  - El diseño visual / paleta / tipografía (`globals.css` → `@theme`).
  - La estructura de carpetas (`components/`, `data/`, `lib/`, `types/`).
  - El orden de las secciones en `page.tsx`.
- **Nivel de complejidad objetivo**: bajo. Cada sección es un componente autocontenido que lee de un array tipado. Preferir "tres líneas similares" antes que una abstracción prematura (helper, HOC, hook custom) para un patrón que aparece una o dos veces.

---

# Decisiones arquitectónicas

- **App Router sin Pages Router**: proyecto creado con Next.js 16, que ya no promueve Pages Router para proyectos nuevos; no hay razón para introducir `pages/`.
- **Sin CMS ni base de datos**: el contenido (proyectos, experiencia, servicios) cambia con poca frecuencia y lo edita directamente Sergio vía `data/*.ts`. Un CMS headless agregaría infraestructura y costo operativo injustificados para 2-3 arrays de datos. Está en el Roadmap como posible mejora futura, no como necesidad actual.
- **`mailto:` en vez de backend de contacto**: evita depender de un servicio de envío de emails (Resend, SendGrid, una API route con rate-limiting, etc.) para un sitio sin tráfico que justifique esa complejidad. Es una limitación conocida y aceptada, no un descuido.
- **Fuentes autoalojadas (Fontsource) en vez de `next/font/google`**: cero llamadas de red a Google Fonts, control total de los pesos cargados (400/500/600/700/800 de JetBrains Mono), y consistencia con el enfoque "self-contained" del resto del proyecto (SVGs propios, sin CDNs externos).
- **Turbopack sin configuración de Webpack**: Next 16 usa Turbopack por defecto; el proyecto no tiene necesidades (loaders custom, Sass legacy con `~imports`, etc.) que ameriten forzar Webpack.
- **CSP explícita para SVGs locales** (`next.config.ts` → `images.dangerouslyAllowSVG` + `contentSecurityPolicy`): Next.js deshabilita la optimización de SVG por defecto por razones de seguridad (XSS vía SVG con `<script>`); se habilita explícitamente solo para los SVGs propios en `public/images/`, con una CSP restrictiva (`script-src 'none'; sandbox;`) en vez de desactivar la protección a secas.

---

# Restricciones

Claude nunca debe, sin pedir permiso explícito primero:

- Cambiar la arquitectura (agregar API routes, middleware/proxy, Server Actions, un backend, una base de datos).
- Agregar dependencias nuevas (librerías de UI, gestión de estado, formularios, analytics, testing) cuando el problema se puede resolver con lo ya instalado.
- Modificar el diseño visual (paleta, tipografía, spacing, radios) definido en `globals.css` → `@theme`.
- Cambiar de versión mayor el stack (Next.js, React, Tailwind, Framer Motion) o volver a Pages Router / Webpack por defecto.
- Introducir sobreingeniería: hooks custom, contexts, factories o abstracciones para patrones que aparecen una sola vez.
- Eliminar comentarios que documentan una decisión no obvia (por ejemplo, los comentarios en `next.config.ts` sobre la CSP de SVGs, o en `Offering.tsx`/`Experience.tsx` sobre por qué el stagger es manual).
- Cambiar nombres públicos (`id`s de secciones usados como anchors `#top`, `#offering`, `#experience`, `#work`, `#contact`; nombres exportados de `data/` y `types/`) sin actualizar todas sus referencias.
- Recrear `next.config.js` mientras exista `next.config.ts` (ver Lecciones aprendidas) — un único archivo de configuración, en TypeScript.

---

# Flujo de trabajo

Antes de modificar código:

1. Entender el contexto: ¿qué sección/dato/tipo se ve afectado? Leer el componente completo, no solo el fragmento a tocar.
2. Revisar archivos relacionados: si se toca un dato (`data/*.ts`), revisar su interfaz en `types/portfolio.ts` y el/los componente(s) que lo consumen.
3. Verificar impactos: ¿el cambio afecta anchors de navegación (`Navbar`, `NavPill`, `Footer` referencian los mismos `#id`s)? ¿afecta el `@theme` compartido por múltiples componentes?
4. Proponer la solución antes de escribir si el cambio es no trivial o ambiguo.
5. Implementar siguiendo las convenciones de esta guía.
6. Validar visualmente si es un cambio de UI (levantar `npm run dev` y revisar en navegador cuando sea posible).
7. Ejecutar `npm run lint`.
8. Ejecutar `npm run build` (usa Turbopack; falla si hay una config de Webpack mal detectada o errores de tipos).
9. Comprobar que no se rompió nada: revisar `git diff` completo antes de dar el cambio por terminado.

---

# Buenas prácticas

- TypeScript estricto en todo archivo nuevo; no usar `any` para esquivar un error de tipos.
- Componentes reutilizables solo cuando el patrón se repite 3+ veces (ver Filosofía).
- Animaciones consistentes: reutilizar `lib/animations.ts` antes de definir una variante nueva.
- Accesibilidad: `alt` correcto en imágenes con contenido, `aria-hidden` en las decorativas, contraste de color acorde a la paleta existente.
- SEO: mantener `metadata` en `layout.tsx` actualizada y coherente (título, descripción, Open Graph) — ver advertencia sobre `metadataBase` en Lecciones aprendidas.
- Performance: usar siempre `next/image` con `width`/`height` o `fill` + `sizes` (patrón ya usado en `CaseStudy.tsx`), nunca `<img>` a secas.

---

# Archivos importantes

- **`next.config.ts`**: única fuente de configuración de Next.js. Define `turbopack.root` (fija la raíz del workspace porque hay lockfiles por encima de este proyecto) y una configuración de `images` que habilita SVGs locales con una CSP restrictiva. No tiene `output: "export"` actualmente (ver Contexto histórico).
- **`package.json`**: scripts estándar de Next 16 (`dev`, `build`, `start` sin `--turbopack`, ya es el bundler por defecto; `lint` ejecuta `eslint` directamente, no `next lint`, que fue removido en Next 16).
- **`src/app/layout.tsx`**: shell raíz. Importa los pesos de JetBrains Mono vía Fontsource, define `metadata` (title/description/OpenGraph) y renderiza `<html lang="en" data-scroll-behavior="smooth">` — ese atributo es necesario en Next 16 para recuperar el comportamiento de scroll suave que antes era automático (ver upgrade guide de Next 16).
- **`src/app/page.tsx`**: composición de la página; el orden de imports/JSX es el orden real de las secciones en pantalla.
- **`src/app/globals.css`**: única fuente de design tokens (`@theme`), utilidades custom (`container-px`, `.stars-bg`), estilos base y soporte de `prefers-reduced-motion`. Tailwind v4 se importa con `@import "tailwindcss";` — no existe `tailwind.config.*`.
- **`src/lib/animations.ts`**: única fuente de variantes de Framer Motion compartidas.
- **`src/types/portfolio.ts`**: única fuente de tipos de contenido.
- **`eslint.config.mjs`**: flat config (formato por defecto desde Next 16), extiende `eslint-config-next/core-web-vitals` y `/typescript`.
- **`tsconfig.json`**: `strict: true`, alias `@/*`, `moduleResolution: "bundler"`.

---

# Carpetas importantes

- **`src/app/`**: shell de Next.js — layout raíz, página principal, estilos globales. Sin subrutas.
- **`src/components/`**: un componente por sección de la landing (`Hero`, `Navbar`, `NavPill`, `InfoBar`, `Offering`, `Experience`, `CaseStudy`, `Contact`, `Footer`). Plano, sin subcarpetas.
- **`src/data/`**: contenido tipado (`projects.ts`, `services.ts`, `experience.ts`). Editar aquí para cambiar textos/proyectos/experiencia, no en los componentes.
- **`src/lib/`**: utilidades compartidas (hoy, solo `animations.ts`).
- **`src/types/`**: interfaces compartidas entre `data/` y `components/`.
- **`public/images/`**: assets propios (retrato, capturas de proyectos, texturas SVG como `stars.svg`). Todas las imágenes son first-party; no hay imágenes remotas ni `remotePatterns` configurados.
- **`public/cv.pdf`**: CV descargable, referenciado con `download=` desde `Hero.tsx` e `InfoBar.tsx`.

---

# Checklist antes de hacer commit

- `npm run build` pasa sin errores.
- `npm run lint` limpio, sin warnings nuevos.
- Sin `console.log` ni código de debug.
- Sin código muerto (imports, componentes o datos no usados).
- Sin archivos temporales (`next.config.js` duplicado, backups, `.orig`, etc.).
- Sin cambios accidentales fuera del alcance pedido — revisar `git diff` completo, no solo el archivo que se creía tocar.
- Si se tocó contenido (`data/`), verificar que los anchors de navegación (`#top`, `#offering`, `#experience`, `#work`, `#contact`) siguen coincidiendo entre `Navbar.tsx`, `NavPill.tsx`, `Footer.tsx` y las secciones en `page.tsx`.

---

# Qué debe inspeccionar Claude cuando algo falla

En este orden, según el síntoma:

1. **Errores de build/Turbopack**: `next.config.ts` (¿hay un `next.config.js` coexistiendo? — ver Lecciones aprendidas), `package.json` (scripts, versión de Next), si aparece un error de "webpack config found", revisar si alguna dependencia lo está inyectando.
2. **Errores de tipos**: `tsconfig.json`, `src/types/portfolio.ts`, el archivo en `src/data/` que provee los datos a ese componente.
3. **Errores de import / módulo no encontrado**: alias `@/*` mal usado, ruta relativa rota, `eslint.config.mjs` si es un error de lint en vez de build real.
4. **Imágenes rotas o warnings de `next/image`**: ¿la imagen está en `public/images/`? ¿es SVG y necesita la config de `dangerouslyAllowSVG`? ¿tiene `width`/`height` o `fill` + contenedor con `position: relative`?
5. **Rutas / anchors que no scrollean**: `data-scroll-behavior="smooth"` en `layout.tsx`, y que el `id` del `<section>` coincida exactamente con el `href="#..."` en `Navbar`/`NavPill`/`Footer`.
6. **Estilos que no aplican**: ¿la clase usa un token que no existe en `@theme` (`globals.css`)? Tailwind v4 no tiene config JS que revisar, todo está en ese archivo.
7. **Consola del navegador / Network**: revisar errores de CSP (por los SVGs), warnings de `next/image` sobre `sizes`/`fill`, o de React sobre keys faltantes en listas (`data/*.ts` mapeados con `.map()`).

---

# Contexto histórico

Línea de tiempo basada en el historial de git (rama `static-export`, sobre `main`):

1. **Creación** (`7214a64` — Initial commit from Create Next App): scaffold estándar de `create-next-app`, incluye el `next.config.ts` original sin la config de `images`.
2. **`ccabaad` — Initial commit**: commit inicial del repo tal como lo tiene el propietario.
3. **`0d63122` — Add Sergio M. portfolio — Next.js 16, Tailwind v4, Framer Motion**: implementación completa del portfolio — todos los componentes de sección, `data/`, `lib/animations.ts`, `types/portfolio.ts`, design tokens en `globals.css`, y la config de `images` (CSP para SVGs) en `next.config.ts`.
4. **`c99eafe` — Merge LICENSE from remote**: se incorpora un archivo `LICENSE` (MIT) desde el remoto.
5. **`dfeaf63` — Add static export config for Next.js** (rama `static-export`, commit actual en `HEAD`): agrega un `next.config.js` **nuevo** con `output: 'export'`, que coexiste con el `next.config.ts` ya existente.
6. **Estado de trabajo actual (sin commitear todavía)**: hay una eliminación de `next.config.js` en stage (`git status` muestra `D  next.config.js`) — es decir, ya se detectó el conflicto de dos archivos de configuración y se está resolviendo dejando **solo `next.config.ts`**, que hoy en disco **no** incluye `output: 'export'`. Resultado neto: pese al nombre de la rama y al mensaje del último commit, el sitio **no** está actualmente configurado para static export. Si el objetivo sigue siendo exportar estático, `output: 'export'` debe agregarse a `next.config.ts` (y evaluar `images.unoptimized: true`, ya que la optimización de `next/image` no funciona en export estático sin un loader custom) — no crear un `next.config.js` de nuevo.

---

# Lecciones aprendidas

- **Nunca coexistir `next.config.js` y `next.config.ts`**: Next.js prioriza uno de los dos silenciosamente sin advertir claramente en todos los casos, por lo que la mitad de la configuración puede terminar ignorada sin error visible. Esto ya ocurrió en este proyecto (commit `dfeaf63` agregó un `next.config.js` con `output: 'export'` mientras `next.config.ts` seguía existiendo con la config de `images`) y se está corrigiendo dejando un único archivo (`next.config.ts`). Si en el futuro se necesita static export, la propiedad `output: 'export'` debe integrarse al `next.config.ts` existente, no en un archivo nuevo.
- **`next/image` y static export no son compatibles por defecto**: si se retoma `output: 'export'`, la optimización de imágenes de `next/image` requiere un servidor (o `images.unoptimized: true`, o un `loader` custom). Antes de reactivar static export, decidir explícitamente cómo se van a servir `Image` de `Hero.tsx`, `CaseStudy.tsx`, `Experience.tsx` y `Contact.tsx`.
- **`metadataBase` apunta a un dominio que no es del propietario**: `src/app/layout.tsx` tiene `metadataBase: new URL("https://madhu.design")`, que no coincide con el dominio real del sitio (Vercel / dominio propio de Sergio). Es casi con certeza un residuo de la plantilla/diseño de referencia usado como base visual del proyecto. Señalarlo si se toca `layout.tsx` o metadata/SEO, pero no "corregirlo" de forma no solicitada sin confirmar cuál es el dominio real de producción.
- **Next 16 cambia el comportamiento de scroll suave**: si `data-scroll-behavior="smooth"` se quita de `<html>` en `layout.tsx`, Next.js deja de forzar `scroll-behavior: auto` durante transiciones de ruta, lo cual en este sitio (single-page, sin rutas reales) tiene poco impacto práctico, pero rompe la paridad con el comportamiento esperado si alguna vez se agregan rutas adicionales.
- **`next lint` fue removido en Next 16**: el script `lint` ya usa `eslint` directamente (correcto en este repo). No reintroducir `next lint` ni la opción `eslint` dentro de `next.config.ts` (removida en v16).

---

# Objetivo permanente

Cada modificación en este proyecto debe:

- Mantener la simplicidad de un sitio de una sola página con contenido semi-estático.
- Respetar la arquitectura existente (App Router puro, sin backend, `data/` como única fuente de contenido).
- Preservar el rendimiento (fuentes autoalojadas, imágenes optimizadas, Turbopack, cero dependencias innecesarias).
- No romper el diseño (paleta, tipografía fluida y animaciones definidas centralmente en `globals.css` y `lib/animations.ts`).
- Dejar el proyecto listo para producción: build limpio, lint limpio, sin residuos de configuración duplicada (ver Lecciones aprendidas).
