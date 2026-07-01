import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell, TableFooter } from '@shadcn/base/components/ui/table';
import { ExpandedState, flexRender, getCoreRowModel, getExpandedRowModel, useReactTable } from '@tanstack/react-table';
import { useUnadjTrialBalanceViewTableColumns, useWtdTrialBalanceViewTableColumns } from './TrialBalanceViewTable.columns';
import { useState, useMemo } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { createUniqueId } from '~/platform-core/helpers/struct';
import { useLegacyRpcClient } from '@/context/RBPIClientRPCProvider';
import { format } from 'date-fns';
import { useAppStrings } from '~/values/strings/app';
import { AuthCurrency } from '@components/currency';

const unadjTrialBalanceQueryKey = 'unadjTrialBalanceQuery'

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

  const { totalDebits, totalCredits } = useMemo(() => {
    const totalDebits = trialBalanceData.reduce((total, account) => total+account.accountSummary.debit, 0)
    const totalCredits = trialBalanceData.reduce((total, account) => total+account.accountSummary.credit, 0)

    return { totalDebits, totalCredits }
  }, [ trialBalanceData ])

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
      <TableBody className='bg-zinc-100 text-sm text-zinc-900'>
        { rows?.length ? (
          rows.map(row => {

            return (
              <TableRow
                key={row.id}
                className="border-0 bg-white even:bg-zinc-100"
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

      <TableFooter className='bg-transparent border-0'>
        <TableRow className=''>
          <TableCell>
            { appStrings.keywords.totals }
          </TableCell>
          <TableCell className='text-right'>
            <div>
              <AuthCurrency amount={totalDebits} />
            </div>
          </TableCell>
          <TableCell className='text-right'>
            <div>
              <AuthCurrency amount={totalCredits} />
            </div>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

const wtbBeginDataQueryKey = 'wtbBeginDataQuery'

export function WorkingTrialBalanceTable() {
  const appStrings = useAppStrings()
  const { columns, beginParams, endDataRef } = useWtdTrialBalanceViewTableColumns()
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

  const { 
    beginningTotalBalance,
    endingTotalBalance,
    totalAdjDebits,
    totalAdjCredits,
  } = useMemo(() => {
    const beginningTotalBalance = trialBalanceData
      .filter(account => account.parent.type === 'A')
      .reduce((total, account) => total+account.accountSummary.totalBalance, 0)
    
    const totalAdjDebits = endDataRef.current
      .filter(account => account.parent.type === 'A')
      .reduce((total, account) => total+account.accountSummary.debit, 0)

    const totalAdjCredits = endDataRef.current
      .filter(account => account.parent.type === 'A')
      .reduce((total, account) => total+account.accountSummary.credit, 0)

    const endingTotalBalance = beginningTotalBalance + (totalAdjDebits - totalAdjCredits)

    return {
      beginningTotalBalance,
      endingTotalBalance,

      totalAdjDebits,
      totalAdjCredits,
    }
  }, [ trialBalanceData, endDataRef ])

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
              className='border-b-0 even:bg-zinc-100'
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
                  className="border-0 bg-white text-sm even:bg-zinc-100"
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

        <TableFooter className='bg-transparent border-0'>
          <TableRow className=''>
            <TableCell className='text-sm'>
              { appStrings.keywords.total } { appStrings.keywords.assets }
            </TableCell>
            <TableCell className='text-right text-sm'>
              <div>
                <AuthCurrency amount={ beginningTotalBalance } />
              </div>
            </TableCell>
            <TableCell className='text-right text-sm'>
              <div>
                <AuthCurrency amount={ totalAdjDebits } />
              </div>
            </TableCell>
            <TableCell className='text-right text-sm'>
              <div>
                <AuthCurrency amount={ totalAdjCredits } />
              </div>
            </TableCell>
            <TableCell className='text-right text-sm'>
              <div>
                <AuthCurrency amount={ endingTotalBalance } />
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

