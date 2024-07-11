/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // more env variables...
    readonly VITE_EPORNER_API_URL: string
    readonly VITE_API_AUTH_URL: string
    readonly VITE_SCRAPPING_DATA_URL: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }