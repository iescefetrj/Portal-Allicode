/// <reference types="vite/client" />

// Tipagem das variáveis de ambiente expostas pelo Vite (prefixo VITE_)
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
