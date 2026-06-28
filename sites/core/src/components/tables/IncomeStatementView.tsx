import { Table, TableBody, TableFooter, TableHead, TableHeader, TableRow } from '@shadcn/base/components/ui/table';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useIncomeStatementViewTableColumns } from './IncomeStatementView.columns';


export function IncomeStatementTable() {
  const columns = useIncomeStatementViewTableColumns()

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
      <TableBody>

      </TableBody>
      <TableFooter>

      </TableFooter>
    </Table>
  )
}


