# Dominio y despliegue

Producción: **https://cristian-reyes.dev/**. Se conserva el builder instalado `angular-cli-ghpages` 3.1.2 y el remoto `https://github.com/CReies/portfolio`. No se añade otro proveedor ni un flujo de CI paralelo.

## Configuración del repositorio

- `pnpm deploy` ejecuta `ng deploy`. Las opciones de `angular.json` fijan el build de producción, `baseHref: "/"` y `cname: "cristian-reyes.dev"`.
- El builder reconoce la salida moderna de Angular en `dist/portfolio/browser`; no se publica el directorio padre.
- `src/CNAME` se copia a la raíz del build. El builder también conserva el dominio en cada publicación mediante su opción `cname`.
- Canonical, Open Graph y Twitter usan el dominio nuevo. Imágenes, SVG y PDF de la aplicación siguen usando rutas relativas.

Validación local, sin publicación:

```sh
pnpm check:architecture
pnpm build
pnpm check:deployment
pnpm test:ci
```

`check:deployment` comprueba la base, el CNAME, la URL canónica, los bundles y la presencia/formato de la imagen social y ambos PDF. Para probar un subdirectorio: `pnpm build --base-href=/Portfolio/` seguido de `pnpm check:deployment /Portfolio/`. Recompilar con `pnpm build` deja nuevamente la base de producción `/`.

La publicación real se realiza con `pnpm deploy` **únicamente después de autorizarla**. El comando crea un commit del artefacto y lo envía a `gh-pages`; no se ejecutó durante esta implementación.

## GitHub Pages y DNS

La configuración esperada del repositorio en Settings → Pages es publicar desde la rama `gh-pages`, carpeta raíz, y usar `cristian-reyes.dev` como Custom domain. Activar Enforce HTTPS cuando el certificado esté disponible. La configuración administrativa y el certificado requieren verificación en GitHub; el build local no los demuestra.

Consulta DNS pública realizada el **29 de octubre de 2026**:

| Nombre                   | Tipo  | Destino observado                                                          |
| ------------------------ | ----- | -------------------------------------------------------------------------- |
| `cristian-reyes.dev`     | A     | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| `www.cristian-reyes.dev` | CNAME | `creies.github.io`                                                         |

Coinciden con los destinos indicados por [GitHub para dominios personalizados](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site). No se modificó DNS ni la configuración remota. La comprobación DNS no equivale a publicar esta versión.
