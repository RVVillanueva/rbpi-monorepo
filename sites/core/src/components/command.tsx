
import {
  CommandDialog,
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandShortcut,
} from "@shadcn/base/components/ui/command";

import { PropsWithChildren } from 'react';

type RPBICommandCenterProviderProps = PropsWithChildren<{
  
}>

export const RBPICommandCenterProvider = (props: RPBICommandCenterProviderProps) => {
  const { children } = props

  return (
    <>
      

      { children }
    </>
  )
} 