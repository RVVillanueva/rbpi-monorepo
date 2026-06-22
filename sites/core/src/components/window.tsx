import { createContext, PropsWithChildren, useContext } from "react";



type RBPIWindowProviderProps = PropsWithChildren<{}>
type WindowManagerContextType = {
  
  getWindows(): never[]

}

const WindowManagerContext = createContext<WindowManagerContextType | null>(null)

export const RBPIWindowProvider = (props: RBPIWindowProviderProps) => {
  const { children } = props

  const getWindows = () => []

  return (
    <WindowManagerContext.Provider value={{ getWindows }}>
      { children }
    </WindowManagerContext.Provider>
  )
}

export const useRBPIWindowManagerContext = () => {
  const ctx = useContext(WindowManagerContext)
  if (!ctx) throw new Error('useRBPIWindowManager should be called inside of WindowManagerContext')
  return ctx
}