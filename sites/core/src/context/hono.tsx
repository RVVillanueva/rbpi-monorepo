import { createContext, PropsWithChildren, useContext } from 'react'
import { getT } from '~/locales'

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
  return getT(useHonoContext().lang ?? 'en')
}

export function useHonoContext() {
  return useContext(honoContext)
}