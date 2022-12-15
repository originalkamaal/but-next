import { useQuery } from '@tanstack/react-query'
import { useReactTable, getCoreRowModel, getPaginationRowModel, flexRender } from '@tanstack/react-table'
import Link from 'next/link'
import React, { useState } from 'react'
import AdminButton from '../../../components/AdminButton'
import Layout from '../../../layouts/AdminLayout'
import { getAllSerives } from '../../../utils/service/service';


const AllServices = () => {

  const [state, setState] = useState({ globalError: null, data: { status: false }, tableData: [] });

  const query = useQuery({
    queryKey: ["getAllSG"],
    queryFn: getAllSerives,
    refetchOnWindowFocus: false,
    enabled: true,
    onSuccess: (data) => { setState({ ...state, tableData: data }) }
  });

  const defaultColumns = [
    {
      accessorKey: 'title',
      id: 'title',
      header: 'Title',
      cell: (props) => <span className='whitespace-nowrap px-2'>{props.getValue()}</span>

    },

    {
      id: 'description',
      accessorKey: 'description',
      header: 'Description'
    },

    {

      id: 'status',
      accessorKey: 'status',
      header: 'Status',
      cell: (props) => props.getValue() == true ? 'Active' : 'Inactive'
    },


    {

      id: 'action',
      header: 'Actions',
      cell: (props) => {
        return <Link href={'/admin/service_groups/' + props.table.getRow(props.row.id).original._id}>Edit</Link>
      }
    },

  ];

  const table = useReactTable({
    data: state.tableData,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })


  return (


    <Layout title='Services' description='List of all the services'>

      <div className='w-full p-5 mb-5 pr-10 flex justify-between items-center'>
        <div className='flex flex-col'>

          <div className='font-extrabold text-3xl'>Manage Service</div>
          <div className='text-sm font-light'>List of all the services.</div>
        </div>
        <div>
          <AdminButton title='Add New Service' href="/admin/services/add-new-service" />
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 pl-4 pr-8'>

        <div className='rounded-md col-span-1 lg:col-span-3'>

          <table className='w-full text-center text-xs'>
            <thead className='bg-gray-200 w-full'>
              {table.getHeaderGroups().map((headerGroup, hgid) => (
                <tr key={hgid}>
                  {headerGroup.headers.map((header, hid) => (
                    <th key={hid} className='border border-collapse p-2'>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
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

        </div>
      </div>
    </Layout>

  )
}
export default AllServices