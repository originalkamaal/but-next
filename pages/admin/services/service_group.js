import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../../../backend/layouts/Main'


const AddNewService = () => {

    const [platforms, setPlatforms] = useState([])
    useEffect(() => {
        async function fetchData() {
            await fetch('/api/admin/services/platforms_and_groups', { method: 'GET' }).then(data => data.json()).then(s => console.log(s));
        }
        fetchData();

    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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
                            <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Titile" required />
                        </div>
                        <div>
                            <textarea
                                rows="4" type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" required />
                        </div>
                        <div>
                            <select id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Titile" required >
                                <option value={true} selected={true}>Active</option>
                                <option value={false}>Inactive</option>
                            </select>
                        </div>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none w-full focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                    </div>
                </form>
                <div className='p-2 bg-black rounded-md col-span-1 lg:col-span-2'>

                </div>
            </div>
        </Layout>
    )
}

export default AddNewService