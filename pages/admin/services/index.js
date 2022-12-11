import Link from 'next/link'
import React, { useMemo } from 'react'
import { useFilters, usePagination, useSortBy, useTable } from 'react-table'
import Layout from '../../../backend/layouts/Main'


const Services = () => {

    const columns = useMemo(() => [
        {
            Header: 'Title',
            accessor: 'title',
        }, {
            Header: 'Type',
            accessor: 'type',
        }, {
            Header: 'Platforms',
            accessor: 'platforms',
        }, {
            Header: 'Gross',
            accessor: 'gross',
        }, {
            Header: 'GST %',
            accessor: 'gstper',
        }, {
            Header: 'GST Amount',
            accessor: 'gstamount',
        }, {
            Header: 'Net',
            accessor: 'net',
        }, {
            Header: 'Edit',
            accessor: 'edit',
        }, {
            Header: 'delet',
            accessor: 'delet',
        }
    ], []);


    const data = useMemo(() => [{
        title: 'This is a Sample service',
        type: 'Account Management',
        platforms: 'Sample',
        gross: 'Sample',
        gstper: 'Sample',
        gstamount: 'Sample',
        net: 'Sample',
        edit: 'Sample',
        delet: 'Sample',
    }], []);


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
            <div className='w-full p-5 pr-10 mb-5 flex justify-between items-center'>
                <div className='flex flex-col'>

                    <div className='font-extrabold text-3xl'>Services</div>
                    <div className='text-sm font-light'>List of all the services.</div>
                </div>
                <div>

                    <Link href='/admin/services/addnew'>
                        <div className='bg-gray-800 text-white font-light text-sm px-3 py-2 rounded-md'>
                            Add New
                        </div>
                    </Link>

                </div>
            </div>

            <div className='px-8'>

                <table {...getTableProps()} className='w-full border border-gray-200'>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps()}
                                        className='py-1 bg-blue-100 text-xs px-4'
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
            </div>
        </Layout>
    )
}

export default Services