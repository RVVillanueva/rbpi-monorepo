import '@/assets/styles/root.css'

import {
  hydrateRoot,
} from 'react-dom/client'

import { HonoAppContextProvider } from '@/context/hono'
import { StrictMode } from 'react'
import { HydratedRouter } from 'react-router/dom'

declare global {
  interface Window {
    __: import('@/context/hono').HonoAppContext
  }
}

hydrateRoot(document, (
  <StrictMode>
    <HonoAppContextProvider initState={window.__}>
      <HydratedRouter />
    </HonoAppContextProvider>
  </StrictMode>
))