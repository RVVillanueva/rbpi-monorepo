import { useRBPIAccountingContext } from "@/context/RBPIAccountingContextProvider";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@shadcn/base/components/ui/table";
import { ExpandedState, flexRender, getCoreRowModel, getExpandedRowModel, useReactTable } from "@tanstack/react-table";
import { PropsWithChildren, useMemo, useState } from "react";
import { TrialBalanceResult } from "~/platform-legacy/functions/internal";
import { useAppStrings } from "~/values/strings/app";
import { useAccountsChartTableColumns } from "./AccountsChartTable.columns";

type AccountsChartTableProps = PropsWithChildren<{
  accountType: RBPICore.ChartOfAccountsBasicUnit
  accounts: TrialBalanceResult[]
}>

export function AccountsChartTable({ accountType, accounts }: AccountsChartTableProps) {
  const columns = useAccountsChartTableColumns()
  const [expanded, setExpanded] = useState<ExpandedState>({})
  const table = useReactTable({
    data: accounts,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSubRows: row => row.children?.length ? row.children : undefined,
    getExpandedRowModel: getExpandedRowModel(),
    state: { expanded },
    onExpandedChange: setExpanded,
  })

  const rows = table.getRowModel().rows

  const totalDebits = useMemo(() => accounts.reduce((total, current) => total+current.accountSummary.debit, 0), [ accounts ])
  const totalCredits = useMemo(() => accounts.reduce((total, current) => total+current.accountSummary.credit, 0), [ accounts ])

  return (
    <div>
      <Table
        className='bg-white rounded-sm'>
        <TableHeader className='text-[1.5ch]'>
          { table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              className='border-b-0!'
              key={headerGroup.id}>
              { headerGroup.headers.map(header => {
                return (
                  <TableHead 
                    style={{
                      minWidth: header.column.columnDef.size,
                      maxWidth: header.column.columnDef.size,
                    }}
                    key={header.id}>
                    { header.isPlaceholder ? null : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    ) }
                  </TableHead>
                )
              }) }
            </TableRow>
          )) }
        </TableHeader>
        <TableBody className='bg-zinc-100 text-xs text-zinc-900'>
          { rows?.length ? (
            rows.map(row => (
                <TableRow
                  key={row.id}
                  className="even:bg-zinc-50 border-0"
                  aria-selected={row.getIsSelected()}
                  data-state={row.getIsSelected() && 'selected'}>
                  { row.getVisibleCells().map(cell => {

                    return (
                      <TableCell key={cell.id}>
                        { flexRender(cell.column.columnDef.cell, cell.getContext()) }
                      </TableCell>
                    )
                  }) }
                </TableRow>
              ))
            ) : (
              <TableRow>
                {/* @TODO: Empty table styling */}
                <TableCell colSpan={columns.length} className='h-24 text-center'>
                  No results.
                </TableCell>
              </TableRow>
            )
          }
        </TableBody>

        <TableFooter className='text-xs border-t-0'>
          <TableRow className='border-t-0 bg-transparent'>
            <TableCell>
              
            </TableCell>
            <TableCell>
              
            </TableCell>
            <TableCell>
              
            </TableCell>
            <TableCell>

            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

export function RBPIChartOfAccountsTable() {
  const rbpi = useRBPIAccountingContext()
  const appStrings = useAppStrings()

  const trialBalance = useMemo(() => rbpi.trialBalanceData, [ rbpi ])
  const accounts = useMemo(() => {
    const data = trialBalance?.results.at(-1)
    const partitions: Record<RBPICore.ChartOfAccountsBasicUnit, TrialBalanceResult[]> = {
      A: [],
      L: [],
      C: [],
      I: [],
      E: [],
    }
    
    for (const account of data?.trialBalanceData ?? []) {
      const accountType = account.parent.type as RBPICore.ChartOfAccountsBasicUnit
      const part = partitions[accountType] ?? []
      partitions[accountType] = [ ...part, account ]
    }

    return partitions
  }, [ trialBalance ])

  if (typeof trialBalance === 'undefined') {
    return (
      <div className='max-w-[90ch]'>
        Loading...
      </div>
    )
  }

  const sectionStrings = {
    A: {
      title: appStrings.keywords.assets,
      unit: appStrings.keywords.assetsUnit,
    },

    L: {
      title: appStrings.keywords.liabilities,
      unit: appStrings.keywords.liabilitiesUnit,
    },
    C: {
      title: appStrings.keywords.equity,
      unit: appStrings.keywords.equityUnit,
    },
    I: {
      title: appStrings.keywords.income,
      unit: appStrings.keywords.incomeUnit,
    },
    E: {
      title: appStrings.keywords.expenses,
      unit: appStrings.keywords.expensesUnit,
    },
  }

  return (
    <div className='max-w-[90ch] space-y-2.5'>
      { Object.entries(accounts).map(([key, value], i) => {
        const unit = key as RBPICore.ChartOfAccountsBasicUnit
        const usedStrings = sectionStrings[unit]

        return (
          <section
            className='space-y-1.5'
            key={i}>
            <div>
              <h3 className='uppercase text-sm text-zinc-600'>{ usedStrings.title } ({ usedStrings.unit })</h3>
            </div>

            <AccountsChartTable
              accountType={unit}
              accounts={value} />
          </section>
        )
      }) }
    </div>
  )
}