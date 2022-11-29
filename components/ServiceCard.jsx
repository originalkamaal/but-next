import Image from 'next/image'
import React from 'react'
import MarketPlaceicons from './MarketPlaceicons'
import FlipkartLogo from '../assets/Flipkart-Emblem.png'

const ServiceCard = ({marketplace, title}) => {
  return (
    <div class="flex items-center justify-center">
      <div class="w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
        <Image src={FlipkartLogo} className='w-full' alt="" />
        <div class="p-3">
          <h1 class="text-xxl font-bold">Account Management </h1>
          <p class="mt-1 text-sm font-semibold text-gray-600">
            <MarketPlaceicons marketplace={marketplace}/>
          </p>
          <p class="mt-1 text-gray-500 text-sm"></p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard