# Project content evidence

Verified on 29 October 2026 using the connected GitHub reader. These are public source projects, distinct from professional work at Sofka. Repository capabilities were inspected; no remote project was deployed or executed as part of this portfolio change.

| Portfolio item | Evidence | Content supported |
| --- | --- | --- |
| Reto Sistema Bancario | [README](https://github.com/CReies/Reto-Sistema-Bancario/blob/main/README.md), [account-service Gradle manifest](https://github.com/CReies/Reto-Sistema-Bancario/blob/main/account-service/build.gradle) | Separate client/account services; account operations, deposits/withdrawals, balance validation and statements; Java 21, WebFlux, R2DBC, PostgreSQL, RabbitMQ, Flyway, Gradle; JUnit platform and Mockito test setup. |
| La Pinguinera backend | [README](https://github.com/CReies/La-Pinguinera-Hexagonal/blob/main/README.md) | Bookstore quotation domain; individual/list/budget/group quotes; customer-seniority and quantity pricing rules; .NET, MongoDB, DDD, Hexagonal Architecture, reactive use cases/controllers, event persistence/Event Sourcing. |
| La Pinguinera frontend | [package.json](https://github.com/CReies/La-Pinguinera-Quotes-Front-Redux/blob/main/package.json) | Angular and NgRx. The repository name contains Redux, but the implementation dependencies are Angular/NgRx, so the portfolio uses those names. |
| ToDo interface | [package.json](https://github.com/CReies/TodoList/blob/main/package.json) | React, Redux Toolkit, TypeScript, Axios. Its matching API is linked separately. |
| ToDo API | [package.json](https://github.com/CReies/TodoAPI/blob/master/package.json), [task routes](https://github.com/CReies/TodoAPI/blob/master/src/routes/tasks.ts), [category routes](https://github.com/CReies/TodoAPI/blob/master/src/routes/categories.ts), [task controller](https://github.com/CReies/TodoAPI/blob/master/src/controllers/taskController.ts), [category controller](https://github.com/CReies/TodoAPI/blob/master/src/controllers/categoryController.ts) | Express, TypeScript, Mongoose/MongoDB; task and category CRUD, task completion. The API has no root README, so routes/controllers provide the behavior evidence. |

The initial inspection also examined source/manifests and found no usable screenshots in the inspected repository trees. The portfolio therefore uses repository-owned SVG architecture illustrations, each explicitly captioned as an illustration. They are simplified explanatory diagrams, not application screenshots or claims of a live demo. All three have explicit 640×320 dimensions and lazy image loading. No GitHub Open Graph image URLs remain in project content.

No performance, security, production-readiness, coverage percentage, client, or business outcome claims are added. The existence of tests and test tooling is not a claim that these external repository tests were run here.

## Acceptance checks

- Exactly three solutions in this order: Reto Sistema Bancario, La Pinguinera, ToDo App & API. The first two carry a Featured project label.
- Banking has one backend source link. Pinguinera and ToDo each have two distinct source links. ToDo App points to TodoList, never Simple-CRUD.
- Details and return controls are native buttons. Inactive faces have both inert and aria-hidden. Opening, returning, and Escape move focus to the exposed control.
- Replacing a project input updates both faces, capabilities, technologies, image text and source URLs.
- Viewport entrance runs once and disconnects its observer. Without an observer, content remains visible. CSS disables entrance, flip transition and hover movement for reduced motion.
- Source validation is read-only; visual and local Angular validation are reported separately by the integrating task.
