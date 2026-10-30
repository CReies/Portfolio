# Perfil del proyecto y selección de herramientas

Análisis del 28 de octubre de 2026 mediante `project-bootstrap`.

## Perfil inicial confirmado

- Frontend de portfolio personal: Angular standalone 17.3, TypeScript 5.4 estricto, RxJS 7.8 y CSS. Evidencia `manifest`: `package.json`; `config`: `angular.json`, `tsconfig.json`.
- pnpm 9.12.2 declarado en `packageManager`. Scripts Angular CLI; build de producción con presupuestos de tamaño.
- Contenido local JSON y SVG; no se encontró integración con backend, base de datos, contenedores o infraestructura cloud en los archivos inspeccionados.
- Jasmine/Karma y Chrome launcher; inicialmente pruebas generadas de creación de componentes. No hay configuración E2E ni CI en este checkout.
- GitHub Pages mediante `angular-cli-ghpages` y `/Portfolio/` en el script de despliegue. Es configuración declarada, no verificación del sitio publicado.
- Contexto `explicit`: preparar nuevas funcionalidades y mejorar arquitectura tomando como referencia [La Pinguinera](https://github.com/CReies/La-Pinguinera-Quotes-Front-Redux).

## Evidencia y límites

El launcher de inspección arrancó en PowerShell pero falló en `run-python.ps1` al ejecutar la comprobación de Python (`StandardErrorEncoding is only supported when standard error is redirected`). Se realizó inspección manual de manifiestos, configuración, árbol de fuentes, componentes, pruebas y estilos. Se leyeron y validaron los catálogos `skills/catalog.json` y `mcp/catalog.json` desde la instalación real de `codex-config`; no se infiere una inspección automática completa.

La referencia tiene `containers` con fachadas, `core` con modelos/servicios/NgRx, y `ui` con elementos/bloques/layouts. Se adopta su separación de responsabilidades, agrupando las funcionalidades del portfolio para mantener sus límites. No se necesita copiar su store de cotizaciones para contenido estático.

No había lockfile versionado ni versión de Node configurada. Angular 17.3 declaraba [Node ^18.13.0 o ^20.9.0](https://angular.dev/reference/versions); el entorno inicial tenía Node 24.22.1. Esta incompatibilidad motivó la actualización posteriormente autorizada por el usuario.

## Estado después de la preparación

- Angular **22.2.3**, CLI y builder **22.2.5**, TypeScript **6.0.3**, RxJS **7.8.2** y pnpm **9.12.2**.
- Node **24.21.0** fijado en `.node-version`, probado con esa instalación de fnm; `engines.node` declara `^24.15.0`.
- Migraciones oficiales consecutivas 17 → 18 → 19 → 20 → 21 → 22. Se conservan detección de cambios con Zone/Eager y HTTP XHR mediante providers explícitos. La migración omitió un import `DOCUMENT` de un spec y se corrigió antes de la validación final.
- Builder moderno `@angular/build` para aplicación y Karma; se conserva Jasmine, sin incorporar Vitest. `angular-cli-ghpages` **3.1.2** pasa a dependencias de desarrollo.
- Versiones directas exactas y `pnpm-lock.yaml` versionado. Datos y modelos pertenecen a cada funcionalidad; contenedores/fachadas separados de UI. Tema global en `core`, menú local en el header.

## Skills recomendadas

| Capacidad del catálogo | Skill | Uso concreto |
| --- | --- | --- |
| frontend-angular | angular-developer | Componentes standalone, DI, signals, migraciones y pruebas compatibles con la versión instalada. |
| library-documentation | context7-mcp | Resolver dudas de API de Angular y CLI; se consultaron las versiones 17.3 y 22 para la migración. |
| acceptance-validation | validate-change | Validar siguientes funcionalidades contra criterios de aceptación. |
| code-review | code-review | Revisar límites y regresiones de cambios sustanciales. |

Para un rediseño posterior: `frontend-design`; para auditoría explícita de accesibilidad/UX: `web-design-guidelines`. Se usó `playwright-best-practices` para una comprobación puntual del build local en Chrome, mediante el runtime disponible, sin añadir dependencias o una suite E2E al repositorio. No se activan skills React, backend o Docker por coincidencias en datos del portfolio.

## Decisión MCP

- **Esencial:** Context7, disponible y consultado para documentación Angular/CLI. No requiere configuración del proyecto.
- **Recomendados para el proyecto:** ninguno.
- **No recomendados:** GitHub (Git/CLI y el conector ya disponible bastan para leer la referencia); Playwright (Karma cubre las pruebas actuales); Serena (búsqueda local suficiente); Inkscape (no se solicita edición especializada de SVG); Postman y MCPs cloud (sin flujo remoto concreto).
- **Bloqueados:** ninguno necesario para esta etapa.

No hay selección pendiente de aprobación, configuración nueva ni afirmación de activación de MCPs. No se crea `.codex/config.toml`.

## Siguiente acción

El bootstrap fue de lectura; sus recomendaciones se aplicaron después a la reorganización solicitada, `AGENTS.md` y la actualización autorizada. La base queda preparada para definir las siguientes funcionalidades. No se ha desplegado ni creado ningún commit.

## Validación y límites del resultado

- `pnpm check:architecture`: correcto. Comprueba límites entre capas, dependencias dentro de cada funcionalidad y propiedad de imports JSON. Analiza rutas relativas literales; si se introducen alias habrá que ampliar su resolución.
- `pnpm build --base-href=/Portfolio/`: correcto con `@angular/build` y Node 24.21.0; bundle inicial 304,33 kB, dentro de presupuestos.
- `pnpm test:ci`: **20 pruebas correctas** en Chrome headless con Angular 22; incluye composición, menú, tema, actualización de tarjetas y carga/cancelación/fallo de SVG.
- Comprobación puntual en Chrome del build de producción servido localmente bajo `/Portfolio/`, a **1440×1000** y **390×844**: contenido, anclas, carga SVG, tema, menú por teclado y visibilidad de controles correctos, sin errores JavaScript ni HTTP locales. No equivale a una suite E2E permanente ni a una auditoría visual completa.
- Comparación JSON contra Git HEAD: proyectos, habilidades y herramientas sin cambios de contenido.
- Revisión independiente completada; se corrigió el foco de teclado en controles ocultos antes de cerrar.
- El instalador advierte sobre `@angular/animations` (dependencia histórica sin uso en las fuentes) y peers del fallback WASM opcional de OXC. No se añadieron overrides para ocultarlos; build y pruebas usan correctamente el entorno Windows comprobado. Otras plataformas no se han probado.
