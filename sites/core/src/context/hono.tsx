import { createContext, PropsWithChildren, useContext, useMemo } from 'react'
import { getT } from '~/locales'

import { createCoreRpcClient } from '~/platform-core/rpc/client'
import { createLegacyRpcClient } from '~/platform-legacy/rpc/client'

export interface HonoAppContext {
  lang: string
}

export const honoContext = createContext<HonoAppContext>({} as never)

export function HonoAppContextProvider(props: PropsWithChildren<{ initState: HonoAppContext }>) {
  const { initState, children } = props

  return (
    <honoContext.Provider value={initState}>
      { children }
    </honoContext.Provider>
  )
}

export function useT() {
  const { lang } = useHonoContext()
  return useMemo(() => getT(lang ?? 'en'), [lang])
}

export function useHonoContext() {
  const ctx = useContext(honoContext)
  if (!ctx) throw new Error('useHonoContext must be used inside of HonoContext')
    return ctx
}