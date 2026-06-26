import { ColumnDef } from "@tanstack/react-table";
import { useAppStrings } from "~/values/strings/app";



export const useCostCentersTableColumns = () => {
  const appStrings = useAppStrings()

  const columns: ColumnDef<RBPICore.Legacy.AccountingCostCentersView>[] = [
    {
      id: "costCenters-checkBoxes",
    },
    {
      id: "costCenters-name",
      header: appStrings.costCentersTableStrings.nameHeader,
    },
    {
      id: "costCenters-budget",
      header: appStrings.costCentersTableStrings.budgetHeader,
    },
    {
      id: "costCenters-actual",
      header: appStrings.costCentersTableStrings.actualHeader,
    },
    {
      id: "costCenters-group",
      header: appStrings.costCentersTableStrings.groupHeader,
    },
    {
      id: "costCenters-action",
      header: appStrings.actionTableHeaderString,
    },
  ]

  return columns
}


