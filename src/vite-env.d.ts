/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_ROUTE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}