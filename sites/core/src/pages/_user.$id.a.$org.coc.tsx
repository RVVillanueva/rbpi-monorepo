import { Outlet } from "react-router";

import { Route } from "./+types/_user.$id.a.$org.coc";
import { glAccountsView } from "~/db/legacy/schema";
import { eq } from "drizzle-orm";
import { useLegacyRpcClient } from "@/context/RBPIClientRPCProvider";
import { useQuery } from "@tanstack/react-query";
import { StatusCodes } from "http-status-codes";

export const loader = async (args: Route.LoaderArgs) => {
  const { hono } = args.context

  return {}
}

export default function AccountingChartOfAccounts(props: Route.ComponentProps) {
  const rpc = useLegacyRpcClient()

  const { data, isPending, error } = useQuery({
    queryKey: ['accounting_chart_of_accounts'],
    queryFn: async () => {
      const res = await rpc.rbpi.ledger.accounts.$get({ query: {} })

      if (res.status === StatusCodes.OK) {
        return await res.json()
      }
    },
  })
  
  return (
    <div>
      Chart of accounts... { JSON.stringify(data) }
    </div>
  )
}
