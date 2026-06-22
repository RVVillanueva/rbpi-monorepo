import { RBPICommandCenterProvider } from "@components/command";
import { TooltipProvider } from "@shadcn/base/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { RBPIClientRPCProvider } from "./RBPIClientRPCProvider";

type RBPICoreProviderProps = PropsWithChildren<{}>

const queryClient = new QueryClient()

export const RBPICoreProvider = (props: RBPICoreProviderProps) => {
  const { children } = props

  return (
    <QueryClientProvider client={queryClient}>
      <RBPIClientRPCProvider>
        <TooltipProvider>
          { children }
        </TooltipProvider>
      </RBPIClientRPCProvider>
    </QueryClientProvider>
  )
}