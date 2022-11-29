import React, { useState } from 'react'
import ReactSelect from 'react-select';
import Option from '../components/SelectMultiple';

const Services = () => {
    const [mpSelected, handleMPChange] = useState(null);
    const [serviceSelected, handleServiceChange] = useState(null);
    const filters = {
        marketplace: [
            { value: "", label: "Select Marketplace" },
            { value: "FKT", label: "Flipkart" },
            { value: "AMZ", label: "Amazon India" },
            { value: "MSO", label: "Meesho" },
            { value: "SPY", label: "Shopsy" },
            { value: "PTM", label: "Paytm" },
            { value: "SCL", label: "Shopclues" },
            { value: "EBY", label: "Ebay" },
            { value: "MYN", label: "Myntra" },
            { value: "AJI", label: "AJIO" },
            { value: "AJI", label: "TATACliq" }
        ],
        services: [
            { value: "", label: "Select Service" },
            { value: "AR", label: "New Account Registration" },
            { value: "AM", label: "Account Management" },
            { value: "PP", label: "Product Photography" },
            { value: "LC", label: "Listing & Catalogs" },
            { value: "ST", label: "Seller Training" },
            { value: "DM", label: "Ads & Digital Marketing" },
            { value: "AR", label: "Account Reinstatement" },
            { value: "WD", label: "Website/App Development" }

        ]
    }
    return (
        <div className='w-full'>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
                <div className='col-span-1 order-2 lg:order-1 bg-red-500'>
                    
                    
                    Left
                    
                    </div>
                <div className='col-span-3 order-1 lg:order-2 bg-blue-500'>
                    
                    
                    Right
                    
                    </div>

            </div>
        </div>
    )
}

export default Services