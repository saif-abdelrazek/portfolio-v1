interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_ACCESS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/// <reference lib="webworker" />

declare const self: ServiceWorkerGlobalScope;
export {};
