import { hc } from "hono/client";

export const createLegacyRpcClient = () => {
  return hc<RBPICore.LegacyRPC>(import.meta.env.LEGACY_RPC_URL, {
    init: {
      credentials: 'include',
    },
  })
}