/// <reference types="vite/client" />

declare type HonoBetterAuth = Awaited<ReturnType<typeof import('@/auth').createAuthFromDatabase>>
declare type HonoBetterAuthSession = HonoBetterAuth['$Infer']['Session']

declare type ConnectRPCHonoContext = {
  bypass: boolean
}

declare interface HonoVariables {
  auth: HonoBetterAuth
  user: HonoBetterAuthSession['user'] | null
  public: HonoBetterAuthSession['user']
  session: HonoBetterAuthSession['session'] | null
  rpc: ConnectRPCHonoContext
  locale: ReturnType<typeof import('~/locales').getT>
  db: {
    core: import('~/db/core').Database
    legacy: import('~/db/legacy').LegacyDatabase
  }
}

interface CloudflareEnv {
  readonly WORKER_ENV: 'production' | 'development' | 'test' | 'staging'
  readonly SITE_ID: string
  readonly SITE_URL: string
  readonly SITE_SECRET: string
  readonly BA_SECRET: string
  readonly BA_URL: string
  readonly RPC_URL: string
  readonly LEGACY_RPC_URL: string
  readonly BYPASS_OTP: number
  readonly CLOUDFLARE_HYPERDRIVE_LOCAL_CONNECTION_STRING_LEGACY: string
  readonly CLOUDFLARE_HYPERDRIVE_LOCAL_CONNECTION_STRING_CORE: string
  readonly CLOUDFLARE_ACCOUNT_ID: string
  readonly CLOUDFLARE_D1_ID: string
  readonly CLOUDFLARE_D1_TOKEN: string
  readonly SENTRY_DSN: string
  readonly RESEND_KEY: string
  readonly EMAIL_FROM: string
  readonly EMAIL_USER: string
  readonly EMAIL_PASS: string
  readonly EMAIL_HOST: string
  readonly GOOGLE_CLIENT_ID: string
  readonly GOOGLE_CLIENT_SECRET: string
  readonly EMAIL_PORT: number
}

declare module 'bun' {
  interface Env extends CloudflareEnv {
    readonly NODE_ENV: string
  }
}

declare type PageProps = 
  import('./types/page').PageProps

declare interface CloudflareBindings extends CloudflareEnv {
  DB: D1Database
  ASSETS: Fetcher
  KV: KVNamespace
  LEGACY: Hyperdrive
  CORE: Hyperdrive
  MEDIA_BUCKET: R2Bucket
}

declare type HonoCloudflare = {
  Bindings: CloudflareBindings
  Variables: HonoVariables
}

declare type RouteHandle = {
  page?: PageProps
}

interface ImportMetaEnv extends CloudflareEnv {
  readonly NODE_ENV: string
}