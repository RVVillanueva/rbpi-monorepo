
import {
  createMiddleware,
} from 'hono/factory'

import {
  createAuthFromDatabase,
} from '@/auth'

import { createLegacyDatabase } from '~/db/legacy'
import { createCoreDatabase } from '~/db/core'

import { getT } from '~/locales'
import { StatusCodes } from 'http-status-codes';

let legacyDb: Awaited<ReturnType<typeof createLegacyDatabase>> | null = null
let coreDb: Awaited<ReturnType<typeof createCoreDatabase>> | null = null

// Core middleware to set up database connections and localization in the context
export const core = createMiddleware<HonoCloudflare>(async (ctx, next) => {
  if (!legacyDb) legacyDb = await createLegacyDatabase(ctx.env)
  if (!coreDb) coreDb = await createCoreDatabase(ctx.env)

  ctx.set('db', { legacy: legacyDb, core: coreDb })
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

let baAuthInstance: ReturnType<typeof createAuthFromDatabase> | null = null

// Middleware to handle authentication using BetterAuth and D1 database
export const betterAuthMiddleware = createMiddleware<HonoCloudflare>(async (ctx, next) => {
  try {
    if (!baAuthInstance) {
      const db = ctx.get('db')
      baAuthInstance = createAuthFromDatabase(db.core, ctx.env)
    }

    ctx.set('auth', baAuthInstance)

    // Check if authenticated then add user and session in the context
    const result = await baAuthInstance.api.getSession({
      headers: new Headers(ctx.req.raw.headers),
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

// mediaMiddleware provides an endpoint for users to access uploaded files
// only those who are authenticated are allowed to query this endpoint.
export const mediaMiddleware = createMiddleware<HonoCloudflare>(async (ctx, next) => {
  const session = ctx.get('session')

  if (!session) {
    return ctx.text('Unauthorized', StatusCodes.UNAUTHORIZED)
  }

  try {
    const key = ctx.req.path.replace(/^\/media\//, '')
    const object = await ctx.env.MEDIA_BUCKET.get(key)

    if (!object) {
      return ctx.text('Not found', StatusCodes.NOT_FOUND)
    }

    const buf = await object.arrayBuffer()
    const headers = new Headers()

    console.log(key)
    
    headers.set('etag', object.httpEtag)
    headers.set('content-type', object.httpMetadata?.contentType ?? 'application/octet-stream')
    headers.set('cache-control', 'public, max-age=31536000')

    return new Response(buf, { headers })
  } catch (error) {
    console.error(error)
  }
})
