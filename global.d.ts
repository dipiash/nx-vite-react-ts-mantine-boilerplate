/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare global {
  interface ImportMetaEnv {
    readonly VITE_GITHUB_TOKEN: string
    readonly VITE_GITHUB_API_ENDPOINT: string
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }

  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): void
      matchImageSnapshot(snapshotName?: string): void
    }
  }
}

export {}
