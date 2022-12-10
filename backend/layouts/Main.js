import React from 'react'
import Sidebar from '../components/Sidebar'

const Main = ({ children }) => {
    return (
        <div className='flex'>

            <div className='relative'>

                <Sidebar />
            </div>
            <div className=''>
                {children}

            </div>
        </div>
    )
}

export default Main