import { createAuthClient } from 'better-auth/client'

export const authClient = createAuthClient({
  baseURL: import.meta.env.BA_URL,
  basePath: '/ba',
  disableDefaultFetchPlugins: true,
  plugins: [],
})