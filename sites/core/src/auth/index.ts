import { accounts, sessions, verifications } from '~/db/core/schema/auth'
import { users } from '~/db/core/schema/users'

import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { admin, testUtils } from 'better-auth/plugins'

import { createFactory } from 'hono/factory'
import { Database } from '~/db/core'

export const createAuthFromDatabase = (db: Database, env: CloudflareBindings) => {
  const auth = betterAuth({
    baseURL: env.BA_URL,
    basePath: '/ba',

    plugins: [
      admin(),
      testUtils(),
    ],

    database: drizzleAdapter(db, {
      usePlural: true,
      provider: 'sqlite',
      schema: {
        users,
        sessions,
        accounts,
        verifications,
      },
    }),

    emailAndPassword: {
      enabled: false,
    },

    socialProviders: {},

    advanced: {
      cookies: {
        session_token: {
          name: 'token',
          attributes: {
            sameSite: 'Lax',  
          },
        },

        session_data: {
          name: 'ses',
          attributes: {
            sameSite: 'Lax',
          },
        },

        dont_remember: {
          name: 'remem',
          attributes: {
            sameSite: 'Lax',
          },
        },
      },
    },

    // core schema used by better auth
    // https://better-auth.com/docs/concepts/database#core-schema

    user: {
      additionalFields: {},
    },

    session: {
      additionalFields: {
        activeSpace: {
          type: 'number',
          required: false,
          input: false,
        },
      },
    },

    account: { 
      additionalFields: {},
    },

    verification: {
      additionalFields: {},
    },
  })

  return auth
}

export const betterAuthHandler = createFactory<HonoCloudflare>().createHandlers(
  async ctx => {
    const auth = ctx.get('auth')
    return auth.handler(ctx.req.raw)
  },
)