
import {
  createMiddleware,
} from 'hono/factory'

import {
  createAuthFromDatabase,
} from '@/auth'

import { createLegacyDatabase } from '~/db/legacy'
import { createCoreDatabase } from '~/db/core'

import { getT } from '~/locales'

// Core middleware to set up database connections and localization in the context
export const core = createMiddleware<HonoCloudflare>(async (ctx, next) => {
  ctx.set('legacy', await createLegacyDatabase(ctx.env))
  ctx.set('core', await createCoreDatabase(ctx.env))
  ctx.set('locale', getT())

  return next()
})

// Middleware to log incoming requests and their response times
export const loggerMiddleware = createMiddleware<HonoCloudflare>(async (ctx, next) => {
  const start = Date.now()
  const { method, url } = ctx.req.raw
  const { pathname } = new URL(url)
  const ip = ctx.req.header('cf-connecting-ip')
    ?? ctx.req.header('x-forwarded-for')
    ?? ctx.req.header('x-real-ip')
    ?? 'unknown'

  await next()

  const ms = Date.now() - start
  const status = ctx.res.status

  console.log(`[${new Date().toJSON()}] ${method} ${pathname} ${status} ${ms}ms - ${ip}`)
})

// Middleware to handle authentication using BetterAuth and D1 database
export const betterAuthMiddleware = createMiddleware<HonoCloudflare>(async (ctx, next) => {
  try {
    const db = ctx.get('core')
    const auth = createAuthFromDatabase(db, ctx.env)
    ctx.set('auth', auth)

    // Check if authenticated then add user and session in the context
    const result = await auth.api.getSession({
      headers: ctx.req.raw.headers,
    })

    if (result) {
      const { user, session } = result
      ctx.set('user', user)
      ctx.set('session', session)
    }

  } catch (err) {
    console.error(err)
  }

  return next()
})

