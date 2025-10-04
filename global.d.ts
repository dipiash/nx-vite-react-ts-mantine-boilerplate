/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="@welldone-software/why-did-you-render" />

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnvironment
  }
  interface ImportMetaEnvironment {
    readonly VITE_GITHUB_API_ENDPOINT: string
    readonly VITE_GITHUB_TOKEN: string
  }
}
