# Instrucciones del portfolio

## Herramientas

- Frontend Angular 22 standalone, TypeScript 6 estricto, RxJS 7.8 y CSS. No contiene backend ni store NgRx.
- Usa pnpm **9.12.2**, declarado en `package.json`, y los scripts del proyecto. Conserva `pnpm-lock.yaml`; instala con `pnpm install --frozen-lockfile` salvo cambios de dependencias autorizados.
- Usa Node **24.21.0**, fijado en `.node-version` (`fnm use`). Respeta `engines` y no asumas compatibilidad con versiones diferentes de las declaradas.
- Sigue las convenciones existentes, mantén cambios enfocados y evita abstracciones o dependencias sin una necesidad concreta. Para nuevas dependencias usa versiones exactas.

## Arquitectura

- `src/app/core`: infraestructura y estado global. Puede depender de `shared`, nunca de `layout` o `features`.
- `src/app/shared`: UI y contratos realmente reutilizados. No depende de `core`, `layout` ni `features`; evita convertirlo en un cajón de utilidades.
- `src/app/layout`: cabecera, navegación y pie con sus componentes privados. Puede usar `core` y `shared`, nunca funcionalidades.
- `src/app/features/<nombre>`: cada funcionalidad posee sus datos, modelos, fachada, contenedores y UI. No importa otra funcionalidad ni `layout`.
- `AppComponent` compone layout y funcionalidades. Los providers globales se registran en `app.config.ts`.
- No crees carpetas vacías, repositorios genéricos, DTOs o mappers sin un caso real. `home` no necesita las capas de una funcionalidad con datos.

Dentro de cada funcionalidad:

- `models`: contratos independientes de componentes Angular; los modelos de presentación pertenecen a `ui`.
- `data-access`: origen de datos, JSON local y futuras integraciones HTTP. Los componentes no importan JSON directamente.
- `application`: fachada que proporciona datos/estado/acciones al contenedor. No expongas detalles HTTP a la UI.
- `containers`: conecta la fachada con la presentación y compone la sección.
- `ui`: inputs tipados y outputs para acciones; no accede a fachadas ni a datos locales directamente.

Prefiere estado local cuando solo afecta a un componente; signals para estado síncrono compartido cuando corresponda. No introduzcas NgRx por imitación de la referencia: requiere necesidades que lo justifiquen. Conserva las convenciones `.component.ts`, `.service.ts`, `.facade.ts` y `.model.ts`.

## Comportamiento y assets

- Conserva diseño, contenido, enlaces y anclas `homeSection`, `projectsSection`, `skillsSection` salvo petición explícita.
- El menú pertenece al header y se propaga por inputs/outputs. El tema global pertenece a `ThemeService`; los componentes enlazan clases desde su estado. No modifiques el DOM de otros componentes con `document.querySelector`.
- Usa `DOCUMENT` para efectos globales imprescindibles y mantén esos efectos fuera de modelos y UI de presentación.
- Los SVG se cargan por nombre desde assets locales. No permitas URLs externas, traversal ni contenido de usuario en `bypassSecurityTrustHtml`.
- Conserva assets relativos compatibles con `/Portfolio/`; evita rutas absolutas `/assets/...`.
- Inputs que puedan actualizarse después del render deben reaccionar a esos cambios; no derives su estado solo en `ngOnInit`.
- Usa APIs estables compatibles con la versión instalada. Mantén la detección de cambios y los providers establecidos por las migraciones oficiales; un cambio a zoneless o a otra estrategia requiere validar los flujos asíncronos y las pruebas.

## Validación

Ejecuta según la superficie modificada:

```sh
pnpm check:architecture
pnpm build
pnpm test:ci
```

- `check:architecture` valida dependencias relativas entre capas y propiedad de imports JSON. Si añades alias u otro mecanismo de resolución, actualiza el comprobador; no lo evites.
- `test:ci` necesita Chrome (`CHROME_BIN` si no se detecta). Mantén Jasmine/Karma; no añadas otro runner para pruebas que ya cubre.
- Para HTTP usa el backend de testing de Angular. Proporciona inputs requeridos antes de `detectChanges()`.
- Añade pruebas de comportamiento cuando cambie lógica: contenido, actualización de inputs, menú, tema y fallos de carga. Evita limitarte a comprobar que un componente existe.
- Para assets o navegación, comprueba `pnpm build --base-href=/Portfolio/` sin desplegar.
- Reporta comandos reales y resultados; distingue compilación, pruebas de componentes y revisión visual/E2E. No afirmes una comprobación que no ejecutaste.

## Skills y MCPs

- Usa `angular-developer` para trabajo Angular respetando la versión instalada.
- Usa `context7-mcp` con Context7 global para dudas concretas de API/compatibilidad ausentes en el código; consulta documentación correspondiente a Angular 22.
- Usa `implement-feature`, `diagnose-bug`, `validate-change` y `code-review` cuando la tarea corresponda a implementación sustancial, diagnóstico, validación o revisión.
- Para rediseño usa `frontend-design`; para auditoría de UX/accesibilidad, `web-design-guidelines`. No actives skills de backend/React por nombres presentes en el contenido del portfolio.
- El bootstrap no recomienda MCPs de proyecto adicionales. Prefiere scripts, `rg`, Git y `gh`. No crees `.codex/config.toml` ni modifiques configuración global sin seguir preview y aprobación de `project-bootstrap`.
- La evidencia y límites del análisis están en `docs/project-profile.md`.

## Coordinación y Git

- Para trabajo sustancial, delega tareas acotadas a especialistas cuando estén disponibles y la sesión lo permita. Asigna un escritor por archivo; no reviertas cambios de otros colaboradores. Si un rol no está disponible, trabaja directamente o usa agentes permitidos e informa de la limitación cuando sea material.
- No hagas refactors ajenos a la petición ni commits sin solicitud explícita. No reescribas historia ni añadas prefijos a mensajes de commit solicitados. Prefiere `gh` para GitHub ordinario.
- Nunca incluyas secretos. No publiques ni ejecutes `pnpm deploy` sin autorización explícita.
- Antes de operaciones destructivas de Git o bases de datos, identifica comando, entorno, alcance y recuperación y obtén autorización concreta. Si un hook deniega, no cambies de herramienta ni codifiques el comando para evitarlo: presenta la operación para ejecución humana externa o mediante un gateway administrado. Aprobar en chat no desbloquea una denegación del hook.
