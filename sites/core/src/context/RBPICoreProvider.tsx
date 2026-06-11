import { RBPICommandCenterProvider } from "@components/command";
import { PropsWithChildren } from "react";

type RBPICoreProviderProps = PropsWithChildren<{}>

export const RBPICoreProvider = (props: RBPICoreProviderProps) => {
  const { children } = props

  return (
    <RBPICommandCenterProvider>
      { children }
    </RBPICommandCenterProvider>
  )
}

