
import {
  CommandDialog,
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandShortcut,
} from "@shadcn/base/components/ui/command";

import React, { createContext, useContext, useState, type PropsWithChildren } from "react";

type RPBICommandCenterProviderProps = PropsWithChildren<{}>

type CommandCenterContextType = {
  openCommandCenter: () => void
  closeCommandCenter: () => void
}

const CommandCenterContext = createContext<CommandCenterContextType | null>(null)

export const RBPICommandCenterProvider = (props: RPBICommandCenterProviderProps) => {
  const { children } = props

  const [isOpen, setOpen] = useState<boolean>(false)

  const openCommandCenter = () => setOpen(true)
  const closeCommandCenter = () =>  setOpen(false)

  return (
    <CommandCenterContext.Provider value={{ openCommandCenter, closeCommandCenter }}>
      { children }

      <CommandDialog 
        onOpenChange={setOpen}
        open={isOpen}>
        <Command>
          <CommandInput></CommandInput>
          <CommandList>
            
          </CommandList>
        </Command>
      </CommandDialog>
    </CommandCenterContext.Provider>
  )
}

export const useRBPICommandCenterContext = () => {
  const ctx = useContext(CommandCenterContext)
  if (!ctx) throw new Error("useCommandCenter must be called inside of CommandCenterProvider")
  return ctx
}