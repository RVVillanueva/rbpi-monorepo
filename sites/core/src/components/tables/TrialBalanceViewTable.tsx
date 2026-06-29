import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell, TableFooter } from '@shadcn/base/components/ui/table';
import { ExpandedState, flexRender, getCoreRowModel, getExpandedRowModel, useReactTable } from '@tanstack/react-table';
import { useUnadjTrialBalanceViewTableColumns, useWtdTrialBalanceViewTableColumns } from './TrialBalanceViewTable.columns';
import { useState, useMemo } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { createUniqueId } from '~/platform-core/helpers/struct';
import { useLegacyRpcClient } from '@/context/RBPIClientRPCProvider';
import { format } from 'date-fns';
import { useAppStrings } from '~/values/strings/app';

const unadjTrialBalanceQueryKey = createUniqueId()

export function UnadjustTrialBalanceTable() {
  const appStrings = useAppStrings()
  const { columns, params } = useUnadjTrialBalanceViewTableColumns()
  const client = useLegacyRpcClient()

  const { data, isPending } = useQuery({
    queryKey: [unadjTrialBalanceQueryKey, params],
    queryFn: async () => {
      const res = await client.rbpi.ledger.trialBalance.$get({
        query: {
          periods: [ format(params.date, 'yyyy/MM/dd') ].join(','),
          branchIds: [ params.branch?.id ?? 0 ].join(','),
        },
      })

      if (res.ok) {
        const json = await res.json()
        return json
      }
    },
    placeholderData: keepPreviousData,
  })

  const { trialBalanceData } = useMemo(() => data?.results.at(-1) ?? { trialBalanceData: [] }, [ data ])

  const [expanded, setExpanded] = useState<ExpandedState>({})
  const table = useReactTable({
    data: trialBalanceData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSubRows: row => row.children?.length ? row.children : undefined,
    getExpandedRowModel: getExpandedRowModel(),
    state: { expanded },
    onExpandedChange: setExpanded,
  })

  if (isPending) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  const rows = table.getRowModel().rows

  return (
    <Table className='bg-white rounded-sm'>
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
      <TableBody className='bg-zinc-100 text-xs text-zinc-900'>
        { rows?.length ? (
          rows.map(row => {

            return (
              <TableRow
                key={row.id}
                className="border-0 bg-white"
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
            <TableRow>
              {/* @TODO: Empty table styling */}
              <TableCell colSpan={columns.length} className='h-24 text-center'>
                No results.
              </TableCell>
            </TableRow>
          )
        }
      </TableBody>

      <TableFooter className='bg-transparent'>
        <TableRow>
          <TableCell>
            { appStrings.keywords.totals }
          </TableCell>
          <TableCell colSpan={ columns.length-1 }>
            <div className='text-right'>

            </div>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

const wtbBeginDataQueryKey = createUniqueId()

export function WorkingTrialBalanceTable() {
  const appStrings = useAppStrings()
  const { columns, beginParams } = useWtdTrialBalanceViewTableColumns()
  const client = useLegacyRpcClient()

  const beginDate = useMemo(() => beginParams.date, [ beginParams ])
  const beginBranchId = useMemo(() => beginParams.branch?.id, [ beginParams ])
  
  const { data: beginData, isPending: isBeginDataPending } = useQuery({
    queryKey: [wtbBeginDataQueryKey, beginDate, beginBranchId],
    queryFn: async () => {
      const res = await client.rbpi.ledger.trialBalance.$get({
        query: {
          periods: [ format(beginDate, 'yyyy/MM/dd') ].join(','),
          branchIds: [ beginParams.branch?.id ?? 0 ].join(','),
        },
      })

      if (res.ok) {
        const json = await res.json()
        return json
      }
    },
    placeholderData: keepPreviousData,
  })

  const isFetching = isBeginDataPending

  const { trialBalanceData } = useMemo(() => beginData?.results.at(-1) ?? { trialBalanceData: [] }, [ beginData ])

  const [expanded, setExpanded] = useState<ExpandedState>({})
  const table = useReactTable({
    data: trialBalanceData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSubRows: row => row.children?.length ? row.children : undefined,
    getExpandedRowModel: getExpandedRowModel(),
    state: { expanded },
    onExpandedChange: setExpanded,
  })
  
  const rows = table.getRowModel().rows

  if (isFetching) {
    return (
      <div>
        
      </div>
    )
  }

  return (
    <div className='relative'>
      <Table className='bg-white rounded-sm'>
        <TableHeader className='text-[1.5ch]'>
          { table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              className='border-b-0'
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
        <TableBody className='bg-zinc-100 text-zinc-900'>
          { rows?.length ? (
            rows.map(row => {
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
              <TableRow>
                {/* @TODO: Empty table styling */}
                <TableCell colSpan={columns.length} className='h-24 text-center'>
                  No results.
                </TableCell>
              </TableRow>
            )
          }
        </TableBody>

        <TableFooter className='bg-transparent'>
          <TableRow>
            <TableCell>
              { appStrings.keywords.totals }
            </TableCell>
            <TableCell colSpan={ columns.length-1 }>
              <div className='text-right'>

              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

