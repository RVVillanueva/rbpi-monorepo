// global.d.ts
import '@hono/react-renderer'
import 'react-router'

declare module RBPICore {
  type LegacyRPCHandler = ReturnType<typeof import('~/legacy/rpc/handlers').bootstrap>
  type CoreRPCHandler = ReturnType<typeof import('~/corePlatform/rpc/handlers').bootstrap>

}

declare module '@hono/react-renderer' {
  interface Props {
    page: import('./types/page').PageProps
  }
}

declare module 'react-router' {
  interface AppLoadContext {
    hono: import('hono').Context<HonoCloudflare, "/", import('hono/types').BlankInput>
  }
}