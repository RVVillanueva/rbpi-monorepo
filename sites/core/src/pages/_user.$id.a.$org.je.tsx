
import { journalAuditView } from "~/db/legacy/schema";
import { Route } from "./+types/_user.$id.a.$org.je";
import { count } from "drizzle-orm";
import { useQuery } from "@tanstack/react-query";
import { useLegacyRpcClient } from "@/context/RBPIClientRPCProvider";
import { StatusCodes } from "http-status-codes";

export const loader = async (args: Route.LoaderArgs) => {
  const { hono } = args.context

  const db = hono.get('db')
  
  
  return {}
}

export default function AccountingJournalEntries(props: Route.ComponentProps) {
  const rpc = useLegacyRpcClient()

  const { data, isPending, error } = useQuery({
    queryKey: ['accounting_journal_entries_k'],
    queryFn: async () => {
      const res = await rpc.rbpi.ledger.journals.$get({
        query: { pageSize: 200 },
      })

      if (res.status === StatusCodes.OK) {
        return await res.json()
      }

      return { data: [] }
    },
  })

  console.error(error)

  return (
    <div>
      Journal entries...
      { JSON.stringify(data) }
    </div>
  )
}

