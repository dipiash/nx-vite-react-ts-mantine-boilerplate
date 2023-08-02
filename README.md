![CI](https://github.com/dipiash/nx-vite-react-ts-mantine-boilerplate/actions/workflows/CheckPullRequest.yml/badge.svg?branch=main)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fdipiash%2Fnx-vite-react-ts-mantine-boilerplate&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

# NX Boilerplate with React + Vite + TypeScript + Mantine

## Getting Started

### Prerequisites

```sh
# Install pnpm
npx pnpm add -g pnpm
```

```sh
# Install NX
npm install -g nx

# Init project
pnpm run init-project
```

### Development

1. Read [how to create GitHub access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)
2. Add `.env.local` into `./packages/data-access/.env.local`
   ```bash
   cp ./packages/data-access/env.example ./packages/data-access/.env.local
   ```
   and add your GitHub token (see step 1)
3. Add `.env.local` to `./apps/react-app/.env.local`
   ```bash
   cp ./apps/react-app/env.example ./apps/react-app/.env.local
   ```
   and add your GitHub token (see step 1)
4. _[Optional step]_ Generate code from GraphQL schema
   ```sh
   pnpm codegen:graphql
   ```
5. Start the app
   ```sh
   pnpm dev
   ```
   and open the page http://localhost:3000/

### Used technologies

- [Nx](https://nx.dev)
- [React](https://reactjs.org)
- [Storybook](https://storybook.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [Cypress](https://www.cypress.io)
- [Styled Components](https://emotion.sh/docs/styled)
- [ESLint](https://eslint.org/)
