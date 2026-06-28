import { Table, TableBody, TableFooter, TableHead, TableHeader, TableRow } from '@shadcn/base/components/ui/table';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useBalanceSheetViewTableColumns } from './BalanceSheetViewTable.columns';



export function BalanceSheetTable() {
  const columns = useBalanceSheetViewTableColumns()

  const table = useReactTable({
    data: [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Table>
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
      <TableFooter>
        
      </TableFooter>
    </Table>
  )
}

