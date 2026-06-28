import { Table, TableBody, TableHead, TableHeader, TableRow } from '@shadcn/base/components/ui/table';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useUnadjTrialBalanceViewTableColumns, useWtdTrialBalanceViewTableColumns } from './TrialBalanceViewTable.columns';


export function UnadjustTrialBalanceTable() {
  const columns = useUnadjTrialBalanceViewTableColumns()

  const table = useReactTable({
    data: [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Table className='bg-white rounded-sm'>
      <TableHeader>
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
                  className='font-normal'
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
      <TableBody>

      </TableBody>
    </Table>
  )
}

export function WorkingTrialBalanceTable() {
  const columns = useWtdTrialBalanceViewTableColumns()

  const table = useReactTable({
    data: [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Table className='bg-white rounded-sm'>
      <TableHeader>
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
      <TableBody>

      </TableBody>
    </Table>
  )
}

