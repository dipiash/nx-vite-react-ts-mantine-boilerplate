![CI](https://github.com/dipiash/nx-ts-vite-react-graphql-styled-monorepo-example/actions/workflows/CheckPullRequest.yml/badge.svg?branch=main)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/dipiash/nx-ts-vite-react-graphql-styled-monorepo-example.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/dipiash/nx-ts-vite-react-graphql-styled-monorepo-example/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/dipiash/nx-ts-vite-react-graphql-styled-monorepo-example.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/dipiash/nx-ts-vite-react-graphql-styled-monorepo-example/context:javascript)

# Getting Started

### Prerequisites

```sh
# Install pnpm
npx pnpm add -g pnpm
```

```sh
# Install NX
npm install -g nx
```

### Development

1. Add `env.local` to `./packages/data-access/env.local` (see example `./packages/data-access/env.example`)
2. Add `env.local` to `./packages/react-app/.env.local` (see example `./packages/react-app/.env.example`)
3. Generate code from GraphQL schema `pnpm @data-access:codegen`


# Used technologies

- [Nx](https://nx.dev)
- [React](https://reactjs.org)
- [Storybook](https://storybook.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [Cypress](https://www.cypress.io)
- [Styled Components](https://styled-components.com/)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
