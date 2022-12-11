import { useMutation, useQuery } from '@tanstack/react-query';
import Link from 'next/link'
import React, { useState } from 'react'
import Layout from '../../../backend/layouts/Main'
import { addNewServiceGroup, getAllSeriveGroups } from '../../../backend/service/service';
import { toast } from 'react-toastify';
import { createColumnHelper, getCoreRowModel, useReactTable, flexRender } from '@tanstack/react-table';


const AddNewService = () => {

    const [state, setState] = useState({ globalError: null, data: { status: false } });

    const { isLoading, error, data, isFetching, refetch } = useQuery({
        queryKey: ["getAllSG"],
        queryFn: getAllSeriveGroups,
        refetchOnWindowFocus: false,
        enabled: true,
        onSuccess: (data) => { console.log() }
    });

    console.log(data);


    const columnHelper = createColumnHelper();
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
                console.log(props.table.getRow(props.row.id).original._id)
                return <span>{props.table.getRow(props.row.id).original._id}</span>
            }
        },

    ];

    const table = useReactTable({
        data,
        columns: defaultColumns,
        getCoreRowModel: getCoreRowModel()
    })


    const handleInputChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setState({ ...state, data: { ...state.data, [key]: value } });

    }

    const handleSubmit = async (e) => {
        console.log('Form Submitted')
        e.preventDefault();

        mutation.mutate({ ...state.data });
        refetch();
    }

    const mutation = useMutation({
        mutationKey: ['addNewSG'],
        mutationFn: (data) => addNewServiceGroup(data),
        onError: () => toast.error('Error creating service group.'),
        onSuccess: (data) => {
            if (data.error) {
                toast.error(data.error)
            } else {
                toast.success('New Service group created successfully.')
            }
        }
    })

    return (
        isFetching ? <div className='bg-black h-screen w-full'>Loading....</div> :

            (<Layout title='Services' description='List of all the services'>

                {mutation.isError && <div className='text-xs text-rose-700 bg-red-100 p-4 m-3 rounded-md'>{mutation.error.message}</div>}
                <div className='w-full p-5 mb-5 pr-10 flex justify-between items-center'>
                    <div className='flex flex-col'>

                        <div className='font-extrabold text-3xl'>Manage Service Groups</div>
                        <div className='text-sm font-light'>Create new group by filling this form. Deleting any service group will also delete Serivices under the same group</div>
                    </div>
                    <div>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 pr-4'>
                    <form onSubmit={handleSubmit} className='col-span-1'>
                        <div className='flex flex-col space-y-4 px-5 text-sm'>

                            <div>
                                <input onChange={handleInputChange} type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Titile" required />
                            </div>
                            <div>
                                <textarea onChange={handleInputChange}
                                    rows="4" type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" required />
                            </div>
                            <div>
                                <select onChange={handleInputChange} id="status" defaultValue={true} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Titile" required >
                                    <option value={true}>Active</option>
                                    <option value={false}>Inactive</option>
                                </select>
                            </div>
                            {state.globalError && <span>This field is required</span>}
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none w-full focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                        </div>
                    </form>
                    <div className='rounded-md col-span-1 lg:col-span-2'>

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
                        {/*{
                        page.length > 0 &&
                        <table {...getTableProps()} className='w-full border border-gray-200'>
                            <thead>
                                {headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map(column => (
                                            <th
                                                {...column.getHeaderProps()}
                                                className='py-1 bg-gray-200 text-xs px-4'
                                            >
                                                {column.render('Header')}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                {page.map(row => {
                                    prepareRow(row)
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map(cell => {
                                                return (
                                                    <td
                                                        {...cell.getCellProps()}
                                                        className="text-center border border-gray-200 text-sm py-2"
                                                    >
                                                        {cell.render('Cell')}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    }
                    {(canNextPage || canPreviousPage) &&

                        <div className="pagination w-full flex justify-between py-3 text-xs items-center">
                            <div className='flex items-center'>
                                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className={`bg-gray-200 text-white mx-1 px-3 rounded-full ${canPreviousPage && 'bg-gray-400 hover:bg-gray-800 border-gray-800'}`}>
                                    {'<<'}
                                </button>
                                <button onClick={() => previousPage()} disabled={!canPreviousPage} className={`bg-gray-200 text-white mx-1 px-3 rounded-full ${canPreviousPage && 'bg-gray-400 hover:bg-gray-800 border-gray-800'}`}>
                                    {'<'}
                                </button>
                                <span>
                                    Page&nbsp;
                                    <strong>
                                        {pageIndex + 1} of {pageOptions.length}
                                    </strong>
                                </span>
                                <button onClick={() => nextPage()} disabled={!canNextPage} className={`bg-gray-200 text-white mx-1 px-3 rounded-full ${canNextPage && 'bg-gray-400 hover:bg-gray-800 border-gray-800'}`}>
                                    {'>'}
                                </button>
                                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className={`bg-gray-200 text-white mx-1 px-3 rounded-full ${canNextPage && 'bg-gray-400 hover:bg-gray-800 border-gray-800'}`}>
                                    {'>>'}
                                </button>
                            </div>
                            <div className='flex items-center'>

                                <span>
                                    Go to page:
                                    <input
                                        type="number"
                                        defaultValue={pageIndex + 1}
                                        onChange={e => {
                                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                                            gotoPage(page)
                                        }}
                                        className='w-10  pl-2 mx-2 text-center rounded-md border-gray-200 border-2'
                                    />
                                </span>
                                <select className='border-2 border-gray-200 rounded-md px-2'
                                    value={pageSize}
                                    onChange={e => {
                                        setPageSize(Number(e.target.value))
                                    }}
                                >
                                    {[10, 20, 30, 40, 50].map(pageSize => (
                                        <option key={pageSize} value={pageSize}>
                                            Show {pageSize}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    }*/}
                    </div>
                </div>
            </Layout>
            )
    )
}

export default AddNewService