import Image from 'next/image'
import React from 'react'
import MarketPlaceicons from './MarketPlaceicons'
import FlipkartLogo from '../../assets/Flipkart-Emblem.png'

const ServiceCard = ({ marketplace, service }) => {

  const services = {
    "RE": "New Account Registration",
    "AM": "Account Management",
    "PP": "Product Photography",
    "LC": "Listing & Catalogs",
    "ST": "Seller Training",
    "DM": "Ads & Digital Marketing",
    "AR": "Account Reinstatement",
    "WD": "Website/App Development"
  }
  return (
    <div class="flex items-center justify-center">
      <div class="w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
        <Image src={FlipkartLogo} className='w-full bg-gray-200 p-3' alt="" />
        <div class="p-3">
          <h1 class="text-xxl font-bold">{services[service]}</h1>
          <p class="mt-1 text-sm font-semibold text-gray-600 flex">
            Platform(s) : &nbsp; <MarketPlaceicons marketplace={marketplace} />
          </p>
          <p class="mt-1 text-gray-500 text-sm">Validity : 1 Month</p>
          <p class="mt-1 text-gray-500 text-xs">Info : 50 New listing + Optimization</p>
        </div>
        <div className='flex bg-blue-600 text-white p-2 justify-center'>
          <p>Starting from ₹2999</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard