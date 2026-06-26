import { hc } from "hono/client";

export type LegacyRPCClient = ReturnType<typeof hc<RBPICore.LegacyRPC>>

export const hcWithType = (...args: Parameters<typeof hc>): LegacyRPCClient => hc<RBPICore.LegacyRPC>(...args)

export const createLegacyRpcClient = () => {
  return hcWithType(import.meta.env.LEGACY_RPC_URL, {
    init: {
      credentials: 'include',
    },
  })
}