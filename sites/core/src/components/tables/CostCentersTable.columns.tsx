import { Checkbox } from "@shadcn/base/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
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
    },
    {
      id: "costCenters-action",
      header: userStrings.actionTableHeaderString,
      size: 48,
    },
  ]

  return columns
}


