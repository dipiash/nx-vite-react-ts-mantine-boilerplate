![CI](https://github.com/dipiash/nx-ts-vite-react-graphql-styled-monorepo-example/actions/workflows/CheckPullRequest.yml/badge.svg?branch=main)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fdipiash%2Fnx-vite-react-ts-mantine-boilerplate&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

# NX Boilerplate with React + Vite + TypeScript + Mantine

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
- [Styled Components](https://emotion.sh/docs/styled)
- [ESLint](https://eslint.org/)
