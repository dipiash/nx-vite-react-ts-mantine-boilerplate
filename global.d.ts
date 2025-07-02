/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="@welldone-software/why-did-you-render" />

declare global {
  interface ImportMetaEnv {
    readonly VITE_GITHUB_TOKEN: string
    readonly VITE_GITHUB_API_ENDPOINT: string
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
}

export {}
