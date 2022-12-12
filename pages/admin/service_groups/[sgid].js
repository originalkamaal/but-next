import { useQuery, useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'

import Layout from '../../../backend/layouts/Main'
import { editServiceGroup, getSGDetails } from '../../../backend/service/service';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';


const EditSG = ({ sgid }) => {
    const router = useRouter();

    const [state, setState] = useState({ globalError: null, id: null, title: null, description: null, status: null });
    const { refetch } = useQuery({
        queryKey: ["getSGDetails", { sgid }],
        queryFn: getSGDetails,
        refetchOnWindowFocus: false,
        enabled: true,
        onError: () => toast.error('Error fetching service group.'),
        onSuccess: (data) => {
            if (data.error) {
                toast.error(data.error)
            } else {

                setState({ ...state, id: data._id, title: data.title, description: data.description, status: data.status });
                console.log(state);
            }
        }
    });

    const handleInputChange = ({ target }) => {
        if (target.id == 'status') {

            setState({ ...state, [target.id]: target.value == 'true' ? true : false })
        } else {

            setState({ ...state, [target.id]: target.value })
        }
        console.log(state);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        mutation.mutate({ id: state.id, title: state.title, description: state.description, status: state.status });
    }

    const mutation = useMutation({
        mutationKey: ['addNewSG'],
        mutationFn: (data) => editServiceGroup(data),
        onError: () => toast.error('Error creating service group.'),
        onSuccess: (data) => {
            refetch();
            if (data.error) {
                toast.error(data.error);

            } else {
                toast.success('New Service group created successfully.');

                router.push('/admin/service_groups');
            }
        }
    })




    return (
        <Layout title='Services' description='List of all the services'>

            <div className='w-full p-5 mb-5 pr-10 flex justify-between items-center'>
                <div className='flex flex-col'>

                    <div className='font-extrabold text-3xl'>Edit </div>
                    <div className='text-sm font-light'>Create new group by filling this form. Deleting any service group will also delete Serivices under the same group</div>
                </div>
                <div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 pr-4'>
                <form onSubmit={handleSubmit} className='col-span-1'>
                    <div className='flex flex-col space-y-4 px-5 text-sm'>

                        <div>
                            <input onChange={handleInputChange} value={state.title ? state.title : ''} type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Titile" required />
                        </div>
                        <div>
                            <textarea onChange={handleInputChange} value={state.description ? state.description : ''}
                                rows="4" type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" required />
                        </div>
                        <div>
                            <select onChange={handleInputChange} id="status" defaultValue={state.status ? state.status == 'true' ? true : false : true} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Titile" required >
                                <option value={true}>Active</option>
                                <option value={false}>Inactive</option>
                            </select>
                        </div>
                        {state.globalError && <span>This field is required</span>}
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none w-full focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                    </div>
                </form>
                <div className='rounded-md col-span-1 lg:col-span-2 bg-black'></div>
            </div>
        </Layout>
    )
}

export const getServerSideProps = async ({
    params,
}) => {
    const { sgid } = params;

    return {
        props: {
            sgid,
        },
    };
};



export default EditSG