import { createConnectTransport } from '@connectrpc/connect-web'
import { env } from 'cloudflare:workers'

type Hono = typeof import('@/server').default

const mockCtx: ExecutionContext = {
  exports: {},
  props: {},
  waitUntil: (promise) => { promise.then(() => {}).catch(() => {}) },
  passThroughOnException: () => {},
  abort: () => {},
}

export const setupHonoMockFetch = 
  (mux: Hono) => {
    return (
      (input, init) => mux.fetch(
        new Request(input, { ...init as RequestInit, redirect: 'manual' }),
        env,
        mockCtx,
      )
    ) as typeof globalThis.fetch
  }