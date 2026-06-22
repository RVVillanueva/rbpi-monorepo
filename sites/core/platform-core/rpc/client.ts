import { hc } from "hono/client";

export const createCoreRpcClient = () => {
  return hc<RBPICore.CorePlatformRPC>(import.meta.env.RPC_URL, {
    init: {
      credentials: 'include',
    },
  })
}