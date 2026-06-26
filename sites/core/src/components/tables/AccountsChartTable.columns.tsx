import { AuthCurrency } from "@components/currency";
import { Button } from "@shadcn/base/components/ui/button";
import { Checkbox } from "@shadcn/base/components/ui/checkbox";
import { ChevronDownIcon, ChevronRightIcon, EllipsisVerticalIcon, LandmarkIcon } from "@shadcn/base/icons";
import { cn } from "@shadcn/base/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router";
import { type TrialBalanceResult } from "~/platform-legacy/functions/internal";
import { useAppStrings } from "~/values/strings/app";
import { useUserStrings } from "~/values/strings/user";


export const useAccountsChartTableColumns = () => {
  const strings = useAppStrings()
  const userStrings = useUserStrings()

  const columns: ColumnDef<TrialBalanceResult>[] = [
    {
      id: "accounts-checkBoxes",
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
      id: "accounts-glCode",
      accessorKey: "parent.code",
      header: userStrings.accountsTableStrings.glCodeHeader,
      size: 100,
    },
    {
      id: "accounts-accountName",
      header: () => {
        return (
          <div className='flex items-center gap-1'>
            { userStrings.accountsTableStrings.accountNameHeader }
          </div>
        )
      },
      cell: args => {
        const { row } = args
        const account = row.original

        return (
          <div style={{ paddingLeft: `${row.depth * 5}ch` }} className='flex items-center gap-1.5 w-full'>
            { row.getCanExpand() ? (
              <Button 
                size={'icon-xs'}
                variant={'ghost'}
                onClick={row.getToggleExpandedHandler()}
                className='cursor-pointer'>
                { row.getIsExpanded() ? <ChevronDownIcon size={14} /> : <ChevronRightIcon size={14} /> }
              </Button>
            ) : (
              <span className='w-3.5 shrink-0' />
            ) }
            <Button
              size={'xs'}
              variant={'link'}
              className='font-normal cursor-pointer px-0 py-0'>
              <div className='flex items-center gap-1.5'>
                <LandmarkIcon size={16} strokeWidth={2} className='mb-1 text-zinc-800' />
                <span>{ account.parent.name }</span>
              </div>
            </Button>
          </div>
        )
      },
    },
    {
      id: "accounts-debits",
      header: userStrings.accountsTableStrings.debitsHeader,
      size: 140,
      cell: args => {
        const { row } = args
        const account = row.original

        return (
          <div className={
            cn(account.accountSummary.debit === 0 ? 'text-zinc-500' : '')
          }>
            <AuthCurrency amount={account.accountSummary.debit} />
          </div>
        )
      },
    },
    {
      id: "accounts-credits",
      header: userStrings.accountsTableStrings.creditsHeader,
      size: 140,
      cell: args => {
        const { row } = args
        const account = row.original

        return (
          <div className={
            cn(account.accountSummary.credit === 0 ? 'text-zinc-500' : '')
          }>
            <AuthCurrency amount={account.accountSummary.credit} />
          </div>
        )
      },
    },
    {
      id: "accounts-action",
      header: userStrings.actionTableHeaderString,
      size: 48,
      cell: args => {

        return (
          <div className=''>
            <Button
              size={'icon-xs'}
              variant={'ghost'}>
              <EllipsisVerticalIcon />
            </Button>
          </div>
        )
      },
    }
  ]

  return columns
}

