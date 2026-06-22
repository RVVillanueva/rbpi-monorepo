import { accounts, sessions, verifications } from '~/db/core/schema/auth'
import { users } from '~/db/core/schema/users'

import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { admin, testUtils, anonymous, organization } from 'better-auth/plugins'

import { createFactory } from 'hono/factory'
import { Database } from '~/db/core'

import { invitations, members, organizationRoles, organizations, teamMembers, teams } from '@schema/index';
import { getUserById } from '~/platform-core/functions/internal';

export const createAuthFromDatabase = (db: Database, env: CloudflareBindings) => {
  const auth = betterAuth({
    secret: env.BA_SECRET,
    baseURL: env.BA_URL,
    basePath: '/',

    plugins: [
      admin(),
      testUtils(),
      anonymous(),
      organization({
        teams: {
          enabled: true,
        },
        allowUserToCreateOrganization: true,
        schema: {
          organization: {
            additionalFields: {
              numericId: {
                type: 'number',
                input: true,
                required: true,
              },
            },
          },
        },
      }),
    ],

    database: drizzleAdapter(db, {
      usePlural: true,
      provider: 'pg',
      schema: {
        users,
        sessions,
        accounts,
        verifications,
        organizations,
        organizationRoles,
        invitations,
        members,
        teams,
        teamMembers,
      },
    }),

    emailAndPassword: {
      enabled: true,
    },

    socialProviders: {
      google: {
        clientId: [
          env.GOOGLE_CLIENT_ID,
        ],

        clientSecret: env.GOOGLE_CLIENT_SECRET,
      },
    },

    advanced: {
      useSecureCookies: env.WORKER_ENV === 'production',
      cookiePrefix: 'rb',
      cookies: {
        session_token: {
          name: 'rb.token',
          attributes: {
            sameSite: 'Lax',  
            secure: true,

          },
        },

        session_data: {
          name: 'rb.ses',
          attributes: {
            sameSite: 'Lax',
            secure: true,
          },
        },

        dont_remember: {
          name: 'rb.remem',
          attributes: {
            sameSite: 'Lax',
            secure: true,
          },
        },
      },
    },

    // core schema used by better auth
    // https://better-auth.com/docs/concepts/database#core-schema

    user: {
      additionalFields: {
        defaultOrganizationId: {
          type: 'string',
          fieldName: 'defaultOrganizationId',
          required: true,
          index: true,
        },

        numericId: {
          type: 'number',
          fieldName: 'numericId',
          required: true,
          unique: true,
        },

        username: {
          type: 'string',
          fieldName: 'username',
          required: true,
          index: true,
        },

        state: {
          type: 'json',
          defaultValue: {
            interfaceStates: {
              isCollapsedSidebar: false,
              isVisiblePanelView: true,

              railsWidth: 42,
              sidebarWidth: 172,
              panelWidth: 240,

              windowStates: {
                activeWindowId: null,
                windows: [],
              },
            },
          } satisfies RBPICore.UserStateConfig,
        },
      },
    },

    session: {
      additionalFields: {
        state: {
          type: 'json',
          defaultValue: {
            windowStates: {
              activeWindowId: null,
              windows: [],
            },
          } satisfies RBPICore.Session.StateConfig,
        },
      },
    },

    account: { 
      additionalFields: {},
    },

    verification: {
      additionalFields: {},
    },

    databaseHooks: {
      session: {
        create: {
          // @SIDE_EFFECT: After a session is created, this hook
          // will effectfully set the active organization based
          // on the default organization set by the user.
          before: async session => {
            const user = await getUserById(db, session.userId)

            if (user.isErr()) {
              return {
                data: {
                  ...session,
                },
              }
            }

            return {
              data: {
                ...session,
                activeOrganizationId: user.value.defaultOrganizationId,
              },
            }
          },
        },
      },
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