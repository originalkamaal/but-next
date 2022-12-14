import { flexRender } from '@tanstack/react-table'
import React from 'react'


const Table = ({ table }) => {
    return (
        <table className='w-full text-center text-xs'>
            <thead className='bg-gray-200 w-full'>
                {table.getHeaderGroups().map((headerGroup, hgid) => (
                    <tr key={hgid}>
                        {headerGroup.headers.map((header, hid) => (
                            <th key={hid} className='border border-collapse p-2'>
                                {header.isPlaceholder
                                    ? null
                                    : <>
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}

                                    </>
                                }
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody className=''>
                {table.getRowModel().rows.map((row, rid) => (
                    <tr key={rid} className="">
                        {row.getVisibleCells().map((cell, cid) => (
                            <td key={cid} className='border border-collapse p-2'>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;
