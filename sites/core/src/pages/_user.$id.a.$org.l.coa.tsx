import { Route } from "./+types/_user.$id.a.$org.l.coa";
import { useLegacyRpcClient } from "@/context/RBPIClientRPCProvider";
import { useQuery } from "@tanstack/react-query";
import { StatusCodes } from "http-status-codes";
import { BreadcrumbHandle } from "@components/breadcrumb";
import { DefaultFilterSelect } from "@components/controls/filters";
import { StatsView } from "@components/cards/kpis";
import { RBPIChartOfAccountsTable } from "@components/tables/AccountsChartTable";


export const handle: BreadcrumbHandle = {
  breadcrumb: {
    label: 'Chart of Accounts',
  },
}

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
    <div className='container @container space-y-4'>
      
      <div className='flex flex-wrap justify-between items-center gap-4'>
        <div className='order-2 lg:order-1'><DefaultFilterSelect /></div>
        <div className='order-1 lg:order-2'><StatsView /></div>
      </div>

      <section className='space-y-4'>
        <RBPIChartOfAccountsTable />
      </section>
    </div>
  )
}
