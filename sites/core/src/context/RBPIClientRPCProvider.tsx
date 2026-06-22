import { createContext, PropsWithChildren, useContext } from "react";

import { createCoreRpcClient } from "~/platform-core/rpc/client";
import { createLegacyRpcClient } from "~/platform-legacy/rpc/client";

type RBPIClientRPCContextType = {
  clients: {
    core: ReturnType<typeof createCoreRpcClient>
    legacy: ReturnType<typeof createLegacyRpcClient>
  },
}

export const RBPIClientRPCContext = createContext<RBPIClientRPCContextType | null>(null)

export function RBPIClientRPCProvider(props: PropsWithChildren) {
  const clients = {
    legacy: createLegacyRpcClient(),
    core: createCoreRpcClient(),
  }

  return (
    <RBPIClientRPCContext.Provider value={{ clients }}>
      { props.children }
    </RBPIClientRPCContext.Provider>
  )
}

export function useRBPIClientRPCContext() {
  const ctx = useContext(RBPIClientRPCContext)
  if (!ctx) throw new Error('useRBPIClientRPCContext must be used inside of RBPIClientRPCProvider')
  return ctx
}

export function useLegacyRpcClient() {
  return useRBPIClientRPCContext().clients.legacy
}

export function useCoreRpcClient() {
  return useRBPIClientRPCContext().clients.core
}