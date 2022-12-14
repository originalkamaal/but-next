import { useMutation, useQuery } from '@tanstack/react-query';
import Link from 'next/link'
import React, { useState } from 'react'
import Layout from '../../../backend/layouts/Main'
import { addPlatform, getAllPlatforms, deletePlatformbyID } from '../../../backend/service/service';
import { toast } from 'react-toastify';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { getCoreRowModel, useReactTable, getPaginationRowModel } from '@tanstack/react-table';
import TablePagination from '../../../backend/components/TablePagination';
import Table from '../../../backend/components/Table';


const AddNewPlatform = () => {

    const [state, setState] = useState({ globalError: null, data: { }, tableData: [] });


    const { isLoading, error, data, isFetching, refetch } = useQuery({
        queryKey: ["getAllPlatforms"],
        queryFn: getAllPlatforms,
        refetchOnWindowFocus: false,
        enabled: true,
        onSuccess: (data) => { console.log(data); setState({ ...state, tableData: data }) }
    });


    const mutation = useMutation({
        mutationKey: ['addNewSG'],
        mutationFn: (data) => addPlatform(data),
        onError: () => toast.error('Error creating service group.'),
        onSuccess: (data) => {
            if (data.error) {
                toast.error(data.error)
            } else {
                toast.success('New Service group created successfully.')
                refetch();
            }
        }
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

            id: 'action',
            header: 'Actions',
            cell: (props) => {
                const sgid = props.table.getRow(props.row.id).original._id;
                return (
                    <div className='flex space-x-2 w-full justify-center items-center'>
                        <Link href={'/admin/service_groups/' + sgid}><AiOutlineEdit size={20} /></Link>
                        <button onClick={() => handleDeleteServiceGroup(sgid)}><AiOutlineDelete size={20} /></button>
                    </div>
                )
            }
        },

    ];

    const table = useReactTable({
        data: state.tableData,
        columns: defaultColumns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),

    })

    const handleInputChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setState({ ...state, data: { ...state.data, [key]: value } });

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        mutation.mutate({ ...state.data });
    }

    const handleDeleteServiceGroup = async (sgid) => {
        const reqStatus = await deleteSGbyID(sgid);
        if (reqStatus) {
            refetch();
        }
    }



    return (


        <Layout title='Services' description='List of all the services'>

            {mutation.isError && <div className='text-xs text-rose-700 bg-red-100 p-4 m-3 rounded-md'>{mutation.error.message}</div>}
            <div className='w-full p-5 mb-5 pr-10 flex justify-between items-center'>
                <div className='flex flex-col'>

                    <div className='font-extrabold text-3xl'>Manage Platforms</div>
                    <div className='text-sm font-light'>Add new Platform by filling this form.</div>
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

                        {state.globalError && <span>This field is required</span>}
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none w-full focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                    </div>
                </form>
                <div className='rounded-md col-span-1 lg:col-span-2'>
                    {/* Service Group Data */}
                    <Table table={table} />

                    <TablePagination table={table} />

                </div>
            </div>
        </Layout >

    )


}

export default AddNewPlatform