import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@shadcn/base/components/ui/table';
import { ExpandedState, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useBalanceSheetViewTableColumns } from './BalanceSheetViewTable.columns';
import { useAppStrings } from '~/values/strings/app';

import type { TrialBalanceResult } from '~/platform-legacy/functions/internal';
import { useMemo, useState } from 'react';
import { useRBPIAccountingContext } from '@/context/RBPIAccountingContextProvider';

export function BalanceSheetTable() {
  const rbpi = useRBPIAccountingContext()
  const appStrings = useAppStrings()

  const trialBalanceDatasets = useMemo(() => rbpi.trialBalanceData?.results.at(-1)?.trialBalanceData ?? [] as TrialBalanceResult[], [ rbpi ])
  
  const assets = useMemo(() => trialBalanceDatasets.filter(account => account.parent.type === 'A'), [ rbpi ])
  const liabilities = useMemo(() => trialBalanceDatasets.filter(account => account.parent.type === 'L'), [ rbpi ])
  const equity = useMemo(() => trialBalanceDatasets.filter(account => account.parent.type === 'C'), [ rbpi ])

  const { columns, totalBalancesPerRefDates } = useBalanceSheetViewTableColumns()

  const [expanded, setExpanded] = useState<ExpandedState>(true)
  const assetsTable = useReactTable({
    data: assets,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSubRows: row => row.children?.length ? row.children : undefined,
    state: { expanded },
    onExpandedChange: setExpanded,
  })

  const liabilitiesTable = useReactTable({
    data: liabilities,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSubRows: row => row.children?.length ? row.children : undefined,
    state: { expanded },
    onExpandedChange: setExpanded,
  })

  const equityTable = useReactTable({
    data: equity,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSubRows: row => row.children?.length ? row.children : undefined,
    state: { expanded },
    onExpandedChange: setExpanded,
  })

  const assetRows = assetsTable.getRowModel().rows
  const liabilitiesRows = liabilitiesTable.getRowModel().rows
  const equityRows = equityTable.getRowModel().rows

  return (
    <div className='relative space-y-2'>
      <Table>
        <TableHeader>
          { assetsTable.getHeaderGroups().map((headerGroup) => (
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
                    className='font-normal text-right'
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

        <TableBody className=' text-zinc-900'>

          <TableRow className='border-0'>
            <TableCell colSpan={ assetsTable.getAllColumns().length }>
              <div className='bg-zinc-100 text-zinc-500 text-center p-1 uppercase'>
                <h2>{ appStrings.keywords.assets }</h2>
              </div>
            </TableCell>
          </TableRow>

          { assetRows?.length ? (
            assetRows.map(row => {
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
              <TableRow className='bg-white'>
                {/* @TODO: Empty table styling */}
                <TableCell colSpan={columns.length} className='h-24 text-center '>

                </TableCell>
              </TableRow>
            )
          }

          <TableRow className='border-0'>
            <TableCell className='text-right text-zinc-600'>
              <span>
                { appStrings.keywords.total } { appStrings.keywords.assets }
              </span>
            </TableCell>
          </TableRow>

          <TableRow className='border-0'>
            <TableCell colSpan={ assetsTable.getAllColumns().length }>
              <div className='bg-zinc-100 text-zinc-500 text-center p-1 uppercase'>
                <h2>{ appStrings.keywords.liabilitiesAndEquity }</h2>
              </div>
            </TableCell>
          </TableRow>

          <TableRow className='border-0'>
            <TableCell colSpan={ assetsTable.getAllColumns().length }>
              <div>
                <span className='text-xs uppercase text-zinc-500'>{ appStrings.keywords.liabilities }</span>
              </div>
            </TableCell>
          </TableRow>
          
          { liabilitiesRows?.length ? (
            liabilitiesRows.map(row => {
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
              <TableRow className='bg-white'>
                {/* @TODO: Empty table styling */}
                <TableCell colSpan={columns.length} className='h-24 text-center '>

                </TableCell>
              </TableRow>
            )
          }

          <TableRow className='border-0'>
            <TableCell className='text-right text-zinc-600'>
              <span>
                { appStrings.keywords.total } { appStrings.keywords.liabilities }
              </span>
            </TableCell>
          </TableRow>

          <TableRow className='border-0'>
            <TableCell colSpan={ assetsTable.getAllColumns().length }>
              <div>
                <span className='text-xs uppercase text-zinc-500'>{ appStrings.keywords.equity }</span>
              </div>
            </TableCell>
          </TableRow>

          { equityRows?.length ? (
            equityRows.map(row => {
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
              <TableRow className='bg-white'>
                {/* @TODO: Empty table styling */}
                <TableCell colSpan={columns.length} className='h-24 text-center'>

                </TableCell>
              </TableRow>
            )
          }

          <TableRow className='border-0'>
            <TableCell className='text-right font-normal text-zinc-600'>
              <span>
                { appStrings.keywords.total } { appStrings.keywords.equity }
              </span>
            </TableCell>
          </TableRow>

        </TableBody>

      </Table>

    </div>
  )
}

