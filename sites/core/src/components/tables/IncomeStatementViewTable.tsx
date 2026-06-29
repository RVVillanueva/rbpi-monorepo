import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@shadcn/base/components/ui/table';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useIncomeStatementViewTableColumns } from './IncomeStatementViewTable.columns';
import { TrialBalanceResult } from '~/platform-legacy/functions/internal';
import { useRBPIAccountingContext } from '@/context/RBPIAccountingContextProvider';
import { useAppStrings } from '~/values/strings/app';
import { useMemo } from 'react';

export function IncomeStatementTable() {
  const { columns, selections, totalBalancesPerRefDates } = useIncomeStatementViewTableColumns()

  const rbpi = useRBPIAccountingContext()
  const appStrings = useAppStrings()

  const trialBalanceDatasets = useMemo(() => rbpi.trialBalanceData?.results.at(-1)?.trialBalanceData ?? [] as TrialBalanceResult[], [ rbpi ])
  
  const incomes = useMemo(() => trialBalanceDatasets.filter(account => account.parent.type === 'I'), [ rbpi ])
  const expenses = useMemo(() => trialBalanceDatasets.filter(account => account.parent.type === 'E'), [ rbpi ])

  const incomeTable = useReactTable({
    data: incomes,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const expensesTable = useReactTable({
    data: expenses,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const incomeRows = incomeTable.getRowModel().rows
  const expensesRows = expensesTable.getRowModel().rows

  return (
    <div className='relative space-y-2'>
      <Table>
        <TableHeader>
          { incomeTable.getHeaderGroups().map((headerGroup) => (
            <TableRow
              className='border-b-0!'
              key={headerGroup.id}>
              { headerGroup.headers.map(header => {
                return (
                  <TableHead 
                    className='font-normal text-right'
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

        <TableBody className='text-zinc-900'>

          <TableRow className='border-0 h-10'>
            <TableCell colSpan={ incomeTable.getAllColumns().length }>
              <span className='text-sm uppercase text-zinc-500'>
                { appStrings.keywords.revenues }
              </span>
            </TableCell>
          </TableRow>

          { incomeRows?.length ? (
            incomeRows.map(row => {
              return (  
                <TableRow
                  key={row.id}
                  className="border-0 bg-white text-xs"
                  aria-selected={row.getIsSelected()}
                  data-state={row.getIsSelected() && 'selected'}>
                  { row.getVisibleCells().map(cell => {

                    return (
                      <TableCell 
                        className='align-top pt-2' 
                        key={cell.id}>
                        { flexRender(cell.column.columnDef.cell, cell.getContext()) }
                      </TableCell>
                    )
                  }) }
                </TableRow>
              )
            })
            ) : (
              <TableRow className='bg-white border-0'>
                {/* @TODO: Empty table styling */}
                <TableCell colSpan={columns.length} className='h-24 text-center '>

                </TableCell>
              </TableRow>
            )
          }

          <TableRow className='border-0 h-10'>
            <TableCell 
              className='text-right'
              >
              <span className='text-sm uppercase text-zinc-500'>
                { appStrings.keywords.incomeStatementStrings.grossIncome }
              </span>
            </TableCell>
            <TableCell colSpan={ incomeTable.getAllColumns().length-1 }>

            </TableCell>
          </TableRow>

          <TableRow className='border-0 h-10'>
            <TableCell colSpan={ incomeTable.getAllColumns().length }>
              <span className='text-sm uppercase text-zinc-500'>
                { appStrings.keywords.expenses }
              </span>
            </TableCell>
          </TableRow>

          { expensesRows?.length ? (
            expensesRows.map(row => {
              return (  
                <TableRow
                  key={row.id}
                  className="border-0 bg-white text-xs"
                  aria-selected={row.getIsSelected()}
                  data-state={row.getIsSelected() && 'selected'}>
                  { row.getVisibleCells().map(cell => {

                    return (
                      <TableCell 
                        className='align-top pt-2' 
                        key={cell.id}>
                        { flexRender(cell.column.columnDef.cell, cell.getContext()) }
                      </TableCell>
                    )
                  }) }
                </TableRow>
              )
            })
            ) : (
              <TableRow className='bg-white border-0'>
                {/* @TODO: Empty table styling */}
                <TableCell colSpan={columns.length} className='h-24 text-center '>

                </TableCell>
              </TableRow>
            )
          }

          <TableRow className='border-0 h-10'>
            <TableCell 
              className='text-right'
              >
              <span className='text-sm uppercase text-zinc-500'>
                { appStrings.keywords.netIncome }
              </span>
            </TableCell>
            <TableCell colSpan={ incomeTable.getAllColumns().length-1 }>

            </TableCell>
          </TableRow>
        </TableBody>

      </Table>
    </div>
  )
}


