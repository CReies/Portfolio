# Portfolio content and search checks

## Content evidence

The English CV (`Cristian_Reyes_CV_EN.tex`, supplied with the local EN/ES PDFs) is the source for the professional profile and employment dates. It supports enterprise software experience since 2024, Java/Spring, reactive APIs, data integration, and cloud. It describes the October 2026 banking role as joining a project; the page must not claim completed banking outcomes or invented metrics. Public repository projects remain separate from professional experience.

## Changes in the document head

- A single HTML description, with the same content in Open Graph and Twitter descriptions.
- A consistent title identifying Cristian Reyes as a Backend & Full-Stack Developer.
- A canonical URL at `https://cristian-reyes.dev/` and matching Open Graph URL.
- A first-party social image at `assets/images/social-preview.png`, declared as 1200 × 630 PNG, with descriptive alternative text. Absolute social URLs intentionally identify the eventual public deployment; application assets retain relative paths.
- English document language and the existing Google verification token preserved.
- Removed duplicate descriptions, empty `og` metadata, stale AngularJS image text and the old keyword list.

## Acceptance checks for integration

- Render one descriptive page-level heading with the new role, followed by logical section headings; retain `homeSection`, `projectsSection` and `skillsSection`.
- Keep project and CV links as real anchors with descriptive visible names, and expose project detail links after the explicit detail action.
- Confirm local EN/ES PDF links and every local image return successfully under `/Portfolio/`.
- Confirm the social PNG exists and its actual dimensions match the declared 1200 × 630; do not infer live availability before deployment.
- Verify the built `index.html` retains a single description and the same title/description in social metadata.
- Keep education in progress, expected graduation June 2027, and language levels faithful to the CV.

These are repository and integration checks, not claims about search ranking, live index coverage, social crawler caches, or deployment. No publishing, Search Console submission, new SEO dependencies, or server-rendering migration is required for this change.

