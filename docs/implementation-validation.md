# Implementación y validación del portfolio

Fecha: **29 de octubre de 2026**, zona America/Bogota.

## Resultado

- Perfil backend/full stack, descripción basada en el CV, contacto y descargas EN/ES. Los PDF descargados se compararon byte a byte con los archivos fuente suministrados.
- Tres soluciones públicas verificadas: sistema bancario, La Pinguinera y ToDo App/API. Diagramas SVG locales identificados como ilustraciones, enlaces separados, detalles accesibles y retorno por botón o Escape. [Evidencia de los repositorios](project-sources.md).
- Cinco etapas de Sofka con las fechas del CV, estudios en curso y lenguas. Experiencia profesional separada de los proyectos públicos.
- Habilidades agrupadas con nombres visibles, iconos verdes y etiquetas compactas de arquitectura/calidad. Los nuevos iconos de tecnologías y herramientas son monogramas SVG locales; no se presentan como logotipos oficiales.
- Temas claro/oscuro, geometría de fondo, tarjetas redondeadas, cabecera translúcida y tipografía conservados. Menú móvil con foco y controles accesibles, entrada breve del perfil y proyectos, movimiento reducido y fallback sin observador.
- Metadatos coherentes, imagen social local 1200×630 y despliegue preparado para `cristian-reyes.dev`. [Configuración de dominio y despliegue](deployment.md).

Se conservó la migración y reorganización que ya estaban en el árbol de trabajo. No se añadieron dependencias, commits ni publicaciones.

## Comandos y resultados

Ejecutados con **Node 24.21.0**, **pnpm 9.12.2**, Angular 22.2.3 y Chrome 152 en Windows:

| Comando | Resultado |
| --- | --- |
| `pnpm check:architecture` | Correcto |
| `pnpm build` | Correcto; bundle inicial 327,65 kB, dentro del presupuesto |
| `pnpm build --base-href=/Portfolio/` | Correcto |
| `pnpm check:deployment /Portfolio/` | Correcto sobre el build de subdirectorio |
| `pnpm check:deployment` | Correcto sobre el build final con base `/` |
| `pnpm test:ci` | 30 pruebas Jasmine/Karma correctas |
| `pnpm ng deploy --dry-run` | Correcto: `dist/portfolio/browser`, rama `gh-pages`, dominio `cristian-reyes.dev`; publicación omitida |
| `git diff --check` | Correcto |

El dry-run se ejecutó sin variables de tokens en el proceso, porque el builder imprime la URL de destino. No hubo push, limpieza remota ni commit. La salida final de `dist/portfolio/browser` tiene base `/`.

Incidencias resueltas: tipado estricto del listener Escape, iconos sol/luna originalmente intercambiados y un aviso de seguimiento de la lista de capacidades al sustituir inputs. El sandbox de Windows bloqueó inicialmente Chrome y la copia de assets; los comandos se repitieron con permisos ampliados y terminaron correctamente. La simulación muestra un aviso de `no-silent` obsoleto generado por los defaults del builder instalado; el proyecto no pasa ese parámetro y la simulación concluye correctamente.

## Navegador y evidencia visual

Playwright del runtime disponible, sin añadir dependencias ni una suite E2E al repositorio: **41 comprobaciones correctas** en `/Portfolio/` y **41 en `/`**. Escritorio 1440×1000, móvil táctil 390×844 y comprobación de desbordamiento a 320 px. Se revisaron ambos temas, foco visible, menú con Tab/Escape, navegación y foco de secciones, giro con teclado/táctil, enlaces de repositorios, descargas reales de CV, SVG, metadatos, dimensiones de imagen social, movimiento reducido y ausencia de IntersectionObserver. Sin errores JavaScript ni respuestas HTTP locales fallidas en los flujos comprobados.

- [Escritorio oscuro](evidence/desktop-dark-home.png) y [escritorio claro](evidence/desktop-light-home.png).
- [Proyectos](evidence/desktop-dark-projects.png).
- [Móvil oscuro](evidence/mobile-dark-home.png) y [móvil claro](evidence/mobile-light-home.png).
- [Detalles de proyecto en móvil](evidence/mobile-dark-details.png).

Los scripts temporales y resultados JSON están en `tmp/validation` y `tmp/*qa.cjs` (ignorados por Git). Se inspeccionaron las capturas; no son mockups. Hubo revisión independiente de código y del cambio de dominio; su único hallazgo funcional fue la inversión de los iconos de tema, ya corregida.

## Límites

La revisión visual fue en Chrome con emulación móvil, no en dispositivos físicos ni Safari/Firefox. Se verificaron semántica, elementos inertes y foco; no se ejecutó un lector de pantalla real ni se afirma una auditoría WCAG completa. Los repositorios externos se inspeccionaron como fuentes de contenido, no se ejecutaron sus aplicaciones o pruebas. El DNS público del nuevo dominio coincide con GitHub Pages; no se modificaron DNS, ajustes administrativos, certificados ni la versión publicada.
