import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useJournalsTableColumns } from "./JournalsTable.columns";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@shadcn/base/components/ui/table";
import { useRBPIAccountingContext } from "@/context/RBPIAccountingContextProvider";
import { useMemo } from "react";
import { useAppStrings } from "~/values/strings/app";

export function JournalsTable() {
  const rbpi = useRBPIAccountingContext()
  const columns = useJournalsTableColumns()

  const latestJournals = useMemo(() => rbpi.journalsData, [ rbpi ])
  const journals = useMemo(() => latestJournals?.data ?? [], [ latestJournals ])

  const table = useReactTable({
    data: journals,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const rows = table.getRowModel().rows

  if (typeof latestJournals === 'undefined') {
    return (
      <div className='max-w-[90ch]'>
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
                  <TableHead key={header.id}>
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
                      <TableCell className='align-top pt-2' key={cell.id}>
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
          <TableRow>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

export function RBPIJournalsTable() {
  const usedStrings = useAppStrings()

  return (
    <div className='max-w-[90ch] space-y-2.5'>
      <section className='space-y-1.5'>
        <div>
          <h3 className='uppercase text-sm text-zinc-600'>
            { usedStrings.keywords.journals }
          </h3>
        </div>

        <JournalsTable />
      </section>
    </div>
  )
}