import { useLegacyRpcClient } from '@/context/RBPIClientRPCProvider';
import { Button } from '@shadcn/base/components/ui/button';
import { Checkbox } from "@shadcn/base/components/ui/checkbox";
import { EllipsisVerticalIcon } from '@shadcn/base/icons';
import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from "@tanstack/react-table";
import { getRBPICostCenterResponseSchema } from '~/platform-legacy/rpc/handlers/specs/accounting';
import { useUserStrings } from "~/values/strings/user";



export const useCostCentersTableColumns = () => {
  const userStrings = useUserStrings()

  const columns: ColumnDef<RBPICore.Legacy.AccountingCostCentersView>[] = [
    {
      id: "costCenters-checkBoxes",
      size: 48,
      header: () => {

        return (
          <div className='px-1.5'>
            <Checkbox />
          </div>
        )
      },
      cell: () => {

        return (
          <div className='px-1.5'>
            <Checkbox />
          </div>
        )
      },
    },
    {
      id: "costCenters-name",
      header: userStrings.costCentersTableStrings.nameHeader,
      cell: args => {
        const { row } = args

        return (
          <div>
            <span>{ row.original.name }</span>
          </div>
        )
      },
    },
    {
      id: "costCenters-budget",
      header: userStrings.costCentersTableStrings.budgetHeader,
    },
    {
      id: "costCenters-actual",
      header: userStrings.costCentersTableStrings.actualHeader,
    },
    {
      id: "costCenters-group",
      header: userStrings.costCentersTableStrings.groupHeader,
      cell: args => {
        const { row } = args
        const client = useLegacyRpcClient()
        
        const { data, isPending } = useQuery({
          queryKey: [`costCenters_parent_${row.id}_k`],
          queryFn: async () => {
            const res = await client.rbpi.costCenters[':costCenterId'].$get({
              param: {
                costCenterId: row.original.parent.toString(),
              },
            })

            if (res.ok) {
              const json = await res.json()
              return getRBPICostCenterResponseSchema.parse(json)?.costCenter
            }
          },
        })

        if (isPending || !data) {
          return (
            <div>

            </div>
          )
        }

        return (
          <div>
            <span>{ data.name }</span>
          </div>
        )
      },
    },
    {
      id: "costCenters-action",
      header: userStrings.actionTableHeaderString,
      size: 48,
      cell: args => {

        return (
          <div>
            <Button
              size={'icon-xs'}
              variant={'ghost'}>
              <EllipsisVerticalIcon />
            </Button>
          </div>
        )
      },
    },
  ]

  return columns
}


