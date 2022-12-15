import Link from 'next/link'
import React from 'react'

const AdminButton = ({ title, href }) => {
    return (
        <Link href={href}><div className='px-3 py-2 bg-gray-900 text-white text-xs rounded-md'>{title}</div></Link>
    )
}

export default AdminButton