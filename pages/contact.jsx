import React from 'react'
import Layout from '../frontend/layouts/Main';
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm';

const ContactUs = () => {
    return (
        <Layout>
            <SectionTitle title="Contact Us" />
            <div className='flex justify-center pb-10'>
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:w-2/3 text-center'>
                    <div className='flex flex-col items-center'>
                        <div>
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50 27.0833C52.7627 27.0833 55.4122 28.1808 57.3657 30.1343C59.3192 32.0878 60.4167 34.7373 60.4167 37.5C60.4167 38.8679 60.1473 40.2225 59.6238 41.4863C59.1003 42.7501 58.333 43.8984 57.3657 44.8657C56.3985 45.833 55.2501 46.6002 53.9863 47.1237C52.7225 47.6472 51.368 47.9166 50 47.9166C47.2374 47.9166 44.5879 46.8192 42.6343 44.8657C40.6808 42.9122 39.5834 40.2626 39.5834 37.5C39.5834 34.7373 40.6808 32.0878 42.6343 30.1343C44.5879 28.1808 47.2374 27.0833 50 27.0833ZM50 8.33331C57.7355 8.33331 65.1542 11.4062 70.624 16.876C76.0938 22.3458 79.1667 29.7645 79.1667 37.5C79.1667 59.375 50 91.6666 50 91.6666C50 91.6666 20.8334 59.375 20.8334 37.5C20.8334 29.7645 23.9063 22.3458 29.3761 16.876C34.8459 11.4062 42.2646 8.33331 50 8.33331ZM50 16.6666C44.4747 16.6666 39.1757 18.8616 35.2687 22.7686C31.3616 26.6756 29.1667 31.9746 29.1667 37.5C29.1667 41.6666 29.1667 50 50 77.9583C70.8334 50 70.8334 41.6666 70.8334 37.5C70.8334 31.9746 68.6384 26.6756 64.7314 22.7686C60.8244 18.8616 55.5254 16.6666 50 16.6666Z" fill="#404168" />
                            </svg>

                        </div>
                        <div>
                            14B, Unknow Building, Saki Naka, Andheri East Mumbai - 400058
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div>
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.5833 44.9583C33.5833 56.75 43.25 66.4167 55.0417 72.4167L64.2083 63.25C65.375 62.0833 67 61.75 68.4583 62.2083C73.125 63.75 78.125 64.5833 83.3333 64.5833C84.4384 64.5833 85.4982 65.0223 86.2796 65.8037C87.061 66.5851 87.5 67.6449 87.5 68.75V83.3333C87.5 84.4384 87.061 85.4982 86.2796 86.2796C85.4982 87.061 84.4384 87.5 83.3333 87.5C64.5472 87.5 46.5304 80.0372 33.2466 66.7534C19.9628 53.4696 12.5 35.4528 12.5 16.6667C12.5 15.5616 12.939 14.5018 13.7204 13.7204C14.5018 12.939 15.5616 12.5 16.6667 12.5H31.25C32.3551 12.5 33.4149 12.939 34.1963 13.7204C34.9777 14.5018 35.4167 15.5616 35.4167 16.6667C35.4167 21.875 36.25 26.875 37.7917 31.5417C38.25 33 37.9167 34.625 36.75 35.7917L27.5833 44.9583Z" fill="#404168" />
                            </svg>


                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='flex'>
                                <div>Sales : </div>
                                <div className='flex flex-col'>
                                    <div>+91 00000 00000</div>
                                    <div>+91 00000 00000</div>
                                    <div>+91 00000 00000</div>
                                </div>
                            </div>

                            <div className='flex'>
                                <div>Support : </div>
                                <div className='flex flex-col'>
                                    <div>+91 00000 00000</div>
                                    <div>+91 00000 00000</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div>
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M83.3334 33.3334L50 54.1667L16.6667 33.3334V25L50 45.8334L83.3334 25M83.3334 16.6667H16.6667C12.0417 16.6667 8.33337 20.375 8.33337 25V75C8.33337 77.2102 9.21135 79.3298 10.7742 80.8926C12.337 82.4554 14.4566 83.3334 16.6667 83.3334H83.3334C85.5435 83.3334 87.6631 82.4554 89.2259 80.8926C90.7887 79.3298 91.6667 77.2102 91.6667 75V25C91.6667 20.375 87.9167 16.6667 83.3334 16.6667Z" fill="#404168" />
                            </svg>
                        </div>
                        <div className='flex flex-col'>

                            <div>Sales : info@brighturban.in</div>
                            <div>Support: support@brighturban.in</div>
                            <div>feedback : feedback@brighturban.in</div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm/>
        </Layout>

    )
}

export default ContactUs