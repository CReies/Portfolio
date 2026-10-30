# Portfolio de Cristian Reyes

Portfolio personal con Angular 22 standalone, TypeScript estricto y CSS.

## Desarrollo

Usa **Node 24.21.0**, fijado en `.node-version`, y **pnpm 9.12.2**, declarado en `package.json`. Con fnm puedes activar Node mediante `fnm use` antes de instalar:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Angular 22 declara compatibilidad con Node `^22.22.3 || ^24.15.0 || ^26.0.0` según su [tabla de compatibilidad](https://angular.dev/reference/versions). El proyecto utiliza la rama 24.

## Arquitectura

```text
src/app/
  core/theme/                  Estado global del tema
  layout/header/               Cabecera, navegación y controles
  layout/footer/               Pie y enlaces sociales
  features/home/               Presentación
  features/experience/         Etapas profesionales del CV y fachada de contenido
  features/projects/
    models/                    Contrato Project independiente de la UI
    data-access/               JSON y exportación tipada
    application/               Fachada consumida por el contenedor
    containers/projects/       Composición de la sección
    ui/project-card/           Tarjetas y modelos de presentación
  features/skills/
    data-access/               JSON de habilidades y herramientas
    application/               Fachada de contenido
    containers/skills/         Composición de la sección
    ui/skill-card/             Presentación de cada tecnología
  shared/models/               Technology compartido
  shared/ui/svg/               Iconos locales
```

Inspirada en la separación de contenedores, fachadas y UI de [La Pinguinera](https://github.com/CReies/La-Pinguinera-Quotes-Front-Redux), adaptada a funcionalidades independientes. Las fachadas son el punto de acceso del contenedor al contenido; actualmente exponen datos estáticos tipados. No hay store global de contenido ni API de portfolio.

- `shared` depende únicamente de `shared` y librerías externas.
- `core` puede depender de `shared`.
- `layout` puede depender de `core` y `shared`.
- Cada funcionalidad puede depender de `core`, `shared` y sus propios archivos; no de otra funcionalidad ni de `layout`.
- `AppComponent` compone secciones y layout. Los providers globales viven en `app.config.ts`.

El comprobador valida imports/exports relativos estáticos y `import()` con rutas literales en `src/app/**/*.ts`. No sustituye al compilador ni es un sistema general de lint; si se introducen alias deben incorporarse al comprobador.

## Añadir o modificar contenido

Edita `features/projects/data-access/projects.json` para proyectos, `features/experience/data-access/experience.json` para experiencia y `features/skills/data-access/{skills,tools}.json` para grupos de habilidades. Los modelos tipados comprueban la forma del contenido durante el build. Los nombres visibles de tecnologías se separan de sus identificadores `icon`. Los SVG permanecen en `src/assets/images/svg/` y los CV locales en `src/assets/documents/`.

Para una nueva funcionalidad, crea su carpeta en `features/` y añade solo las capas necesarias. La UI recibe inputs y comunica acciones con outputs. El contenedor utiliza la fachada para acceder a datos/estado. Si aparece una API, su integración pertenece a `data-access`; el contenedor mantiene su contrato con la fachada. Usa signals para estado síncrono y RxJS para flujos asíncronos cuando aporten valor.

## Comprobaciones

```sh
pnpm check:architecture
pnpm build
pnpm check:deployment
pnpm test:ci
```

`test:ci` ejecuta Jasmine/Karma una vez con Chrome headless; requiere Chrome instalado. Si no se detecta, configura `CHROME_BIN` con la ruta del ejecutable. `pnpm test` conserva el modo interactivo. No hay runner E2E configurado.

El build se genera en `dist/portfolio/browser`. El dominio de producción es `https://cristian-reyes.dev/`, con base `/` y `CNAME` incluido en el build. `pnpm deploy` utiliza esos valores desde `angular.json` y publica en la rama `gh-pages`; solo debe ejecutarse con autorización explícita. Consulta [la configuración de despliegue](docs/deployment.md).

Se conserva la compatibilidad de los assets con subdirectorios. Para comprobarla sin publicar: `pnpm build --base-href=/Portfolio/` y `pnpm check:deployment /Portfolio/`. Ejecuta `pnpm build` de nuevo para recuperar el artefacto de producción en la raíz del dominio.

Consulta [AGENTS.md](AGENTS.md) para las reglas y [el perfil de bootstrap](docs/project-profile.md) para la evidencia, skills y decisión MCP.
