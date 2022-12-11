import Link from 'next/link'
import React, { useEffect, useState, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../../../backend/layouts/Main'
import { useFilters, usePagination, useSortBy, useTable } from 'react-table';
import { addNewService } from '../../../backend/service/service_group';



const AddNewService = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [platforms, setPlatforms] = useState([])
    const fetchData = async () => {
        await fetch('/api/admin/services/service_groups', { method: 'GET' }).then(plats => plats.json()).then(plats => {

            setPlatforms(plats)
        });
    }

    useEffect(() => {
        fetchData();
    }, []);
    const onSubmit = async (data) => {
        var res = await addNewService(data);
        console.log(res)
        fetchData();
    }

    const columns = useMemo(() => [
        {
            Header: 'Title',
            accessor: 'title',
        }, {
            Header: 'Description',
            accessor: 'desc',
        }, {
            Header: 'Status',
            accessor: 'status',
        }, {
            Header: 'Edit',
            accessor: 'edit',
        }, {
            Header: 'Delete',
            accessor: 'delete',
        }
    ], []);


    const data = useMemo(() => platforms, []);


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable({ columns, data }, useFilters, useSortBy, usePagination)






    return (
        <Layout title='Services' description='List of all the services'>
            <div className='w-full p-5 mb-5 pr-10 flex justify-between items-center'>
                <div className='flex flex-col'>

                    <div className='font-extrabold text-3xl'>Manage Service Groups</div>
                    <div className='text-sm font-light'>Create new group by filling this form. Deleting any service group will also delete Serivices under the same group</div>
                </div>
                <div>


                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 pr-4'>
                <form onSubmit={handleSubmit(onSubmit)} className='col-span-1'>
                    <div className='flex flex-col space-y-4 px-5 text-sm'>

                        <div>
                            <input type="text" id="title"  {...register("title", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Titile" required />
                        </div>
                        <div>
                            <textarea  {...register("description", { required: true })}
                                rows="4" type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" required />
                        </div>
                        <div>
                            <select id="status" defaultValue={true}  {...register("status", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Titile" required >
                                <option value={true}>Active</option>
                                <option value={false}>Inactive</option>
                            </select>
                        </div>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none w-full focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                    </div>
                </form>
                <div className='col-span-1 lg:col-span-2'>
                    {
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
                    {page.length > 10 &&

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
                    }
                </div>
            </div>
        </Layout>
    )
}

export default AddNewService