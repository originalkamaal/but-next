import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../../../layouts/Main'


const AddNewService = () => {

  const [platforms, setPlatforms] = useState([])
  useEffect(() => {
    async function fetchData() {
      await fetch('/api/admin/services/platforms_and_groups', { method: 'GET' }).then(data => data.json()).then(s =>console.log(s));
    }
    fetchData();

  }, [])

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Layout title='Services' description='List of all the services'>
      <div className='w-full p-5 pr-10 mb-5 flex justify-between items-center'>
        <div className='flex flex-col'>

          <div className='font-extrabold text-3xl'>Add New Service</div>
          <div className='text-sm font-light'>Create new service by filling this form.</div>
        </div>
        <div>

          <Link href='/admin/services'>
            <div className='bg-gray-800 text-white font-light text-sm px-3 py-2 rounded-md'>
              All Services
            </div>
          </Link>

        </div>
      </div>

      <div className='w-full'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="test" {...register("example")} />

          <input {...register("exampleRequired", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </Layout>
  )
}

export default AddNewService