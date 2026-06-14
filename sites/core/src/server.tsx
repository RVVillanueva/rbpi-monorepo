import { Hono } from 'hono';
import { contextStorage } from 'hono/context-storage';
import { createHonoServer } from 'react-router-hono-server/cloudflare';

import { betterAuthHandler } from './auth';
import { betterAuthMiddleware, core, loggerMiddleware } from './middleware';

import { coreRpc } from '~/platform-core/rpc';
import { legacyRpc } from '~/platform-legacy/rpc';

import * as Sentry from '@sentry/cloudflare';

const reactRouter = await createHonoServer<HonoCloudflare>({
  getLoadContext(hono) {
    return { hono }
  },
})

// createHono creates a new hono instance with the "core" attached to it.
export const createHono = () => new Hono<HonoCloudflare>().use(core)

export const withSentry = (mux: ReturnType<typeof main>) => {
  return Sentry.withSentry(
    (env: CloudflareBindings) => ({
      environment: env.WORKER_ENV,
      dsn: env.SENTRY_DSN,
      integrations: [
        Sentry.consoleLoggingIntegration({
          levels: [
            'log',
            'warn',
            'error',
          ],
        }),
      ],
      enableLogs: true,
      sendDefaultPii: true,
      tracesSampleRate: 1.0,
    }),
    Object.assign(mux, {

    }),
  )
}

// main
export const main = (hono: ReturnType<typeof createHono> = createHono()) => {
  return hono
    .use(contextStorage())
    .use(betterAuthMiddleware)
    .all('/ba/*', ...betterAuthHandler)
    .route('/', legacyRpc)
    .route('/', coreRpc)
    .route('/', reactRouter)
}

export const createServer = (hono: ReturnType<typeof main> = createHono()) => withSentry(main(hono))

// cloudflare entrypoint
export default createServer(
  createHono()
    .get('/.well-known/*', ctx => ctx.body(null, 204))
    .use(loggerMiddleware)
)