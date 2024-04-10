/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // more env variables...
    readonly VITE_EPORNER_API_URL: string
    readonly BASE_URL: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }