# Repository Guidelines

## Project Structure & Module Organization
This Nx workspace keeps the production app in `apps/main`, organized by Feature-Sliced Design (`app/`, `features/`, `pages/`, `shared/`, `widgets/`) backed by Vite + Mantine. Shared libraries live under `packages/`: `ui-kit` for Storybook-driven UI primitives, `icons` for generated SVG React wrappers, and `graphql` for schema documents and generated operations. Global tooling resides in `tools/`, while `docs/` captures architectural notes and RFCs.

## Build, Test, and Development Commands
- `npm run dev` – serve `apps/main` with Vite at `localhost:3000`.
- `npm run build:app` – produce a production build in `apps/main/dist`.
- `npm run test` – execute all Vitest suites with coverage.
- `npm run lint` / `npm run lint:fix` – run ESLint, Stylelint, and module-boundary checks (auto-fixing when possible).
- `npm run dev:storybook` – develop UI kit stories at `localhost:6006`; pair with `npm run build:storybook` for static output.
- `npm run codegen:graphql` – regenerate typed operations from the GitHub GraphQL schema.

## Coding Style & Naming Conventions
Follow the `.editorconfig` defaults: UTF-8, LF endings, and two-space indentation. Prettier enforces single quotes, no semicolons, trailing commas, and `printWidth` 150—run `npx prettier --write` on stubborn files. Keep React components PascalCase, hook utilities camelCase, and match GraphQL document names to PascalCase filenames per `eslint-plugin-graphql`. Use the provided TS path aliases such as `@nx-vite-react-ts-mantine-boilerplate/ui-kit` instead of relative traversals.

## Testing Guidelines
Vitest and React Testing Library power unit tests; colocate specs inside `__tests__` folders as `*.spec.ts`. Prefer deterministic tests that assert rendered output rather than implementation details, and mock network requests through the GraphQL layer. Ensure `npm run test` passes locally; coverage reports land in `apps/main/coverage` and should stay above existing thresholds.

## Commit & Pull Request Guidelines
Write imperative, present-tense commit summaries (`Add search filters`) and group related changes logically. Before pushing, run `npm run lint` and `npm run test`; include screenshots for UI-affecting work and reference issues with `Closes #123` when applicable. PR descriptions should outline scope, testing done, and any follow-up tasks—link design docs in `docs/` if the architecture shifts.

## Security & Configuration Tips
Copy environment templates (`apps/main/env.example`, `packages/graphql/env.example`) to `.env.local` counterparts and provide the GitHub token required for API calls. Keep tokens out of commits, and rerun `npm run codegen:graphql` whenever schema changes land.
