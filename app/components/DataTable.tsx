
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    flexRender,
  } from "@tanstack/react-table";
  import type { ColumnDef } from "@tanstack/react-table";
  
  // ============================================================
  // REUSABLE DATA TABLE COMPONENT
  // Desktop = multi-column table
  // Mobile = single-column card-style list (custom render)
  // ============================================================
  
  interface DataTableProps<TData> {
    data: TData[];
    columns: ColumnDef<TData, any>[];
    enableSorting?: boolean;
  }
  
  export default function DataTable<TData>({
    data,
    columns,
    enableSorting = true,
  }: DataTableProps<TData>) {
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    });
  
    return (
      <>
        {/* ========== DESKTOP TABLE ========== */}
        <div className="hidden md:block overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full">
            {/* HEADER */}
            <thead className="bg-gray-50">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="border-b border-gray-200 text-left text-xs text-gray-500"
                >
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-5 py-3 font-medium cursor-pointer select-none"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getIsSorted() === "asc" && " ↑"}
                      {header.column.getIsSorted() === "desc" && " ↓"}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
  
            {/* BODY */}
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-5 py-4">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* ========== MOBILE TABLE ========== */}
        <div className="md:hidden overflow-hidden rounded-xl border border-gray-200 bg-white">
          <table className="w-full">
            <tbody>
              {table.getRowModel().rows.map((row, index) => (
                <tr
                  key={row.id}
                  className={`hover:bg-gray-50 transition-colors duration-150 active:bg-gray-100 ${
                    index !== data.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-3">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }