import Image from 'next/image'
import React from 'react'
import ContactSVG from '../assets/Contacts.svg'

const ContactForm = () => {
    return (
        <div className='px-4 flex flex-wrap'>
            <Image src={ContactSVG} className="-mb-1 flex-1" alt="Any query? please submit here." />
            <div className="flex flex-col items-center justify-center p-8 w-full flex-1">
                <div className="mb-5 px-3 w-full">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-gray-100 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#404168] focus:shadow-md"
                    />
                </div>
                <div className="mb-5 px-3 w-full">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@domain.com"
                        className="w-full rounded-md border border-[#e0e0e0] bg-gray-100 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#404168] focus:shadow-md"
                    />
                </div>
                <div className="mb-5 px-3 w-full">
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Enter your subject"
                        className="w-full rounded-md border border-[#e0e0e0] bg-gray-100 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#404168] focus:shadow-md"
                    />
                </div>
                <div className="mb-5 px-3 w-full">
                    <textarea
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="Type your message"
                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-gray-100 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#404168] focus:shadow-md"
                    ></textarea>
                </div>
                <div>
                    <button
                        className="hover:shadow-form rounded-md bg-[#404168] py-2 px-10 place-self-end text-base font-semibold text-white outline-none"
                    >
                        SUBMIT
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ContactForm