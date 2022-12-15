import { useMutation, useQuery } from '@tanstack/react-query';
import Link from 'next/link'
import React, { useState } from 'react'
import Layout from '../../../layouts/AdminLayout'
import { addNewService, getAllSerives } from '../../../utils/service/service';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
const AddNewService = () => {
    const [state, setState] = useState({ globalError: null, data: { status: false } });
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // SKU Done
    // title Done
    // service_group Done
    // platforms Done
    // descriptions Done
    // features Done
    // validity_type Done
    // validity Done 
    // mrp
    // listing_price
    // discount_one
    // discount_two
    // discount_three
    // gst
    // gstper
    // status
    // created_by
    const mutation = useMutation({
        mutationKey: ['addNewSG'],
        mutationFn: (data) => addNewService(data),
        onError: () => toast.error('Error creating service group.'),
        onSuccess: (data) => {
            if (data.error) {
                toast.error(data.error)
            } else {
                toast.success('New Service group created successfully.')
            }
        }
    })
    const handleInputChange = ({ target }) => {
        if (target.id) {
        }
        const key = target.id;
        const value = target.value;
        setState({ ...state, data: { ...state.data, [key]: value } });
    }
    const onSubmit = async (e) => {

        console.log(e)
        mutation.mutate({ ...state.data });
    }
    return (
        <Layout title='Services' description='List of all the services'>
            {mutation.isError && <div className='text-xs text-rose-700 bg-red-100 p-4 m-3 rounded-md'>{mutation.error.message}</div>}
            <div className='w-full p-5 mb-5 pr-10 flex justify-between items-center'>
                <div className='flex flex-col'>
                    <div className='font-extrabold text-3xl'>Add New Service</div>
                    <div className='text-sm font-light'>Create new service by filling this form.</div>
                </div>
                <div>
                    All Services
                </div>
            </div>
            {JSON.stringify(state.data)}
            <div className='w-full pl-4 pr-8 justify-center flex'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-2/3 space-y-4'>
                    <div>
                        {/* SKU ID */}
                        <div className='mb-6'>
                            <span>
                                <input {...register("sku", { required: true })} className='block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' autoComplete="off" type="text" maxLength="255"
                                    placeholder="Enter SKU ID" />
                            </span>
                            <p className='hint p-2 text-xs text-gray-500'> Please avoid using special characters, only - &amp; _ are allowed. </p>
                            <p elname="error"></p>
                        </div>
                        <div className='mb-6'>
                            <div>
                                <select {...register("service_group", { required: true })} className='block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' tabIndex="-1" aria-hidden="true">
                                    <option value='' isplaceholder="true">Select Service Group</option>
                                    <option value="Third Choice">Third Choice</option>
                                    <option value="zfs-others-zfs">Other</option>
                                </select>
                            </div>
                            <p elname="error"></p>
                        </div>
                        <div className='mb-6'>
                            <div className='flex flex-col'>
                                <span>
                                    <input {...register("platforms", {required:true})} className='mr-1' type="checkbox" id="MultipleChoice_1"
                                        value="Flipkart" />
                                    <label htmlFor="MultipleChoice_1">
                                        <em>Flipkart</em>
                                    </label>
                                </span>
                                <span>
                                    <input {...register("platforms", {required:true})} className='mr-1' type="checkbox" id="MultipleChoice_2"
                                        value="Meesho" />
                                    <label htmlFor="MultipleChoice_2">
                                        <em>Meesho</em>
                                    </label>
                                </span>
                                <span>
                                    <input {...register("platforms", {required:true})} className='mr-1' type="checkbox" id="MultipleChoice_3"
                                        value="Amazon India" />
                                    <label htmlFor="MultipleChoice_3">
                                        <em>Amazon India</em>
                                    </label>
                                </span>
                            </div>
                            <p elname="error">

                            </p>
                        </div>
                        <div className='mb-6'>
                            <span>
                                <textarea {...register("description", { required: true })} className='block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' rows={5} autoComplete="off" placeholder="Enter Service Description">

                                </textarea>
                            </span>
                            <p elname="error">

                            </p>
                            <p className='hint p-2 text-xs text-gray-500'> Add some details about the service.</p>
                        </div>
                        <div className='mb-6'>
                            <span>
                                <textarea {...register("features", { required: true })} className='block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' rows={5} autoComplete="off" placeholder="Enter Service Features">

                                </textarea>
                            </span>
                            <p elname="error">

                            </p>
                            <p className='hint p-2 text-xs text-gray-500'> Please enter one feature in one line.</p>
                        </div>
                        <div className='mb-6'>
                            <div>
                                <select defaultValue='' {...register("v_type", { required: true })} className='block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' tabIndex="-1" aria-hidden="true">
                                    <option value="" isplaceholder="true">Select Validity Type</option>
                                    <option value="First Choice">First Choice</option>
                                    <option value="Second Choice">Second Choice</option>
                                    <option value="Third Choice">Third Choice</option>
                                </select>

                            </div>
                            <p elname="error">

                            </p>
                            <p className='hint p-2 text-xs text-gray-500'> Select NOS for services based on counts, for example listing services.</p>
                        </div>
                        <div className='mb-6'>
                            <span>
                                <input {...register("validity", { required: true })} className='block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' autoComplete="off" type="text" maxLength="18" placeholder="Enter Validity" />
                            </span>
                            <p className='hint p-2 text-xs text-gray-500'> Enter counts incase of NOS type validity,for example 1000 for thousand listings in Listing Service</p>

                            <p elname="error">

                            </p>
                        </div>
                        <div className='mb-6'>
                            <span>
                                <input {...register("mrp", { required: true })} className='block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' autoComplete="off" type="text" maxLength="18" placeholder="Enter MRP" />
                            </span>
                            <p elname="error">

                            </p>
                            <p className='hint p-2 text-xs text-gray-500'> Enter base price for selected validity type and validity. </p>
                        </div>
                        <div className='mb-6'>
                            <span>
                                <input {...register("price", { required: true })} className='block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' autoComplete="off" type="text" maxLength="18"
                                    placeholder="Enter Listing Price" />
                            </span>
                            <p elname="error">

                            </p>
                            <p className='hint p-2 text-xs text-gray-500'> Listing price is including GST. Discounts will be calculated over listing price based
                                onselected validity type and validity. </p>
                        </div>
                        <div className='mb-6'>
                            <span>
                                <input {...register("gstper", { required: true })} className='block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' autoComplete="off" type="text" maxLength="18" placeholder="Enter GST Rate" />
                            </span>
                            <p elname="error">

                            </p>
                        </div>
                        <div className='mb-6'>
                            <span>
                                <input {...register("discount_two", { required: true })} className='block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' autoComplete="off" type="text" maxLength="18"
                                    placeholder="Enter Discount Rate For 2x Validity" />
                            </span>
                            <p elname="error">

                            </p>
                            <p className='hint p-2 text-xs text-gray-500'> For example if validity type is daily and validity is 7 days, then this will be considered
                                asDiscount for 14 days. </p>
                        </div>
                        <div className='mb-6'>
                            <span>
                                <input {...register("discount_three", { required: true })} className='block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' autoComplete="off" type="text" maxLength="18"
                                    placeholder="Enter Discount Rate For 3x Validity" />
                            </span>
                            <span elname="field_unit_span">

                            </span>
                            <p elname="error">

                            </p>
                            <p className='hint p-2 text-xs text-gray-500'> For example if validity type is daily and validity is 7 days, then this will be considered
                                asDiscount for 21 days. </p>
                        </div>
                        <div className='mb-6'>
                            <input {...register("status", { required: true })} className='' type="checkbox" checked={true} id="DecisionBox" />
                            <label htmlFor="DecisionBox">
                                <span elname="display_name"> Service Status(checked means ACTIVE)
                                </span>
                            </label>
                            <p elname="error">

                            </p>
                        </div>
                        <div>
                            <button type='submit'>Add New Service</button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
export default AddNewService