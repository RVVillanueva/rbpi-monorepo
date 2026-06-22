import { createAuthClient } from 'better-auth/client'
import { anonymousClient, organizationClient } from 'better-auth/client/plugins'

export const authClient = createAuthClient({
  baseURL: import.meta.env.BA_URL,
  basePath: '/ba',
  disableDefaultFetchPlugins: true,
  plugins: [
    anonymousClient(),
    organizationClient(),
  ],
})