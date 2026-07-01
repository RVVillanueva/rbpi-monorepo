import { useLegacyRpcClient } from "@/context/RBPIClientRPCProvider";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@shadcn/base/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { getRBPICostCentersResponseSchema } from "~/platform-legacy/rpc/handlers/specs/accounting";
import { useAppStrings } from "~/values/strings/app";
import { useCostCentersTableColumns } from "./CostCentersTable.columns";

export function CostCentersTable() {
  const columns = useCostCentersTableColumns()
  const client = useLegacyRpcClient()

  const { data: costCenters, isPending } = useQuery({
    queryKey: ['cost_centers_table_k'],
    queryFn: async () => {
      const res = await client.rbpi.costCenters.$get({
        query: {},
      })

      if (res.ok) {
        const json = await res.json()
        const costCenters = getRBPICostCentersResponseSchema.parse(json)
        return costCenters
      }
    },
  })

  const table = useReactTable({
    data: costCenters?.data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const rows = table.getRowModel().rows

  if (isPending) {
    return (
      <div>
        Loading...
      </div>
    )
  }

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
        <TableBody className='bg-zinc-100 text-sm text-zinc-900'>
          { rows?.length ? (
            rows.map(row => (
                <TableRow
                  key={row.id}
                  className="even:bg-zinc-50 border-0"
                  aria-selected={row.getIsSelected()}
                  data-state={row.getIsSelected() && 'selected'}>
                  { row.getVisibleCells().map(cell => {

                    return (
                      <TableCell className='pt-2' key={cell.id}>
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
        <TableFooter className='text-sm border-t-0'>
          <TableRow>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

export function RBPICostCentersTable() {
  const usedStrings = useAppStrings()

  return (
    <div className='max-w-[90ch] space-y-2.5'>
      <section className='space-y-1.5'>
        <div>
          <h3 className='uppercase text-sm text-zinc-600'>
            { usedStrings.keywords.costCenters }
          </h3>
        </div>

        <CostCentersTable />
      </section>
    </div>
  )
}