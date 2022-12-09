import React, { useState } from 'react'
import CheckboxFilter from '../components/CheckboxFilter';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    const [mpSelected, handleMPChange] = useState([
        { value: "FKT", checked: false, label: "Flipkart" },
        { value: "AMZ", checked: false, label: "Amazon India" },
        { value: "MSO", checked: false, label: "Meesho" },
        { value: "SPY", checked: false, label: "Shopsy" },
        { value: "PTM", checked: false, label: "Paytm" },
        { value: "SCL", checked: false, label: "Shopclues" },
        { value: "EBY", checked: false, label: "Ebay" },
        { value: "MYN", checked: false, label: "Myntra" },
        { value: "AJI", checked: false, label: "AJIO" },
        { value: "AJI", checked: false, label: "TATACliq" }
    ]);
    const [serviceSelected, handleServiceChange] = useState([
        { value: "RE", checked: false, label: "New Account Registration" },
        { value: "AM", checked: false, label: "Account Management" },
        { value: "PP", checked: false, label: "Product Photography" },
        { value: "LC", checked: false, label: "Listing & Catalogs" },
        { value: "ST", checked: false, label: "Seller Training" },
        { value: "DM", checked: false, label: "Ads & Digital Marketing" },
        { value: "AR", checked: false, label: "Account Reinstatement" },
        { value: "WD", checked: false, label: "Website/App Development" }

    ]);

    return (
        <div className='w-full'>
            <div className='grid grid-cols-1 lg:grid-cols-5'>
                <div className='col-span-1 bg-gray-200 rounded-md ml-3 mr-3 lg:mr-0 mb-3 flex flex-col items-start order-2 lg:order-1 pb-10'>



                    <CheckboxFilter title="Filter by Marketplace" state={mpSelected} handleChange={handleMPChange} />

                    <CheckboxFilter title="Filter by Services" state={serviceSelected} handleChange={handleServiceChange} />


                    <div className='px-4 py-1 self-center text-center text-budarkblue border-2 border-budarkblue rounded-sm'>Apply Filter</div>
                </div>
                <div className='col-span-4 order-1 lg:order-2 grid grid-cols-1 gap-4 p-4 lg:grid-cols-4'>



                    <ServiceCard service="AM" marketplace="AMZ" />
                    <ServiceCard service="RE" marketplace="FKT" />
                    <ServiceCard service="LC" marketplace="PTM" />
                    <ServiceCard service="PP" marketplace="SCL" />
                    <ServiceCard service="RE" marketplace="EBY" />

                </div>

            </div>
        </div>
    )
}

export default Services