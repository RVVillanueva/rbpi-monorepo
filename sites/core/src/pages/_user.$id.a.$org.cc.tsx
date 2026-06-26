import { useLegacyRpcClient } from "@/context/RBPIClientRPCProvider";
import { BreadcrumbHandle } from "@components/breadcrumb";
import { RBPICostCentersTable } from "@components/tables/CostCentersTable";
import { useQuery } from "@tanstack/react-query";
import { StatusCodes } from "http-status-codes";

export const handle: BreadcrumbHandle = {
  breadcrumb: {
    label: 'Cost Centers',
  },
}

export default function AccountingCostCenters() {
  const rpc = useLegacyRpcClient()

  const { data, isPending, error } = useQuery({
    queryKey: ['accounting_cost_centers_k'],
    queryFn: async () => {
      const res = await rpc.rbpi.costCenters.$get({ query: {} })

      if (res.status === StatusCodes.OK) {
        return await res.json()
      }
    },
  })

  return (
    <div className='container @container space-y-4'>
      
      <section className='space-y-4'>
        <RBPICostCentersTable />
      </section>
    </div>
  )
}
