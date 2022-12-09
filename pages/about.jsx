import React from 'react'
import Layout from '../frontend/layouts/Main';
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm';

const AboutUs = () => {
    return (
        <Layout>
            <SectionTitle title="About Us" />
            <div className='flex flex-col items-center py-10'>

                <div className='flex items-center flex-col px-10 text-center pb-10'>
                    <h1 className='font-extrabold text-2xl italic pb-5'>We’re BrightUrban Technologies, That Will Help You Grow Your Online Sales Performance</h1>
                    <p className=' text-left lg:text-center text-xs'>BrightUrban Technologies is a company started by Ex employees of major ecommerce marketplaces, Mr. Abhishek Kumar Yadav, Mohammed Naveed Khan, and
                        Imran Mujawar. They are having huge experience in Ecommerce Seller Managements, During working as an employee in different Marketplaces, What they realised
                        is there are so many sellers in the market who have good potentials, making best quality products and also offering good pricing in the offline market, but still they are failing to grow their business online. Based on their experience they understood that most of the sellers are not enough trained about how different ecommerce platforms works and how they can create a strategy to attract maximum customers. In May 2019 BrightUrban Technologies started serving the online sellers,
                    </p>
                </div>
                <div className='flex flex-wrap w-2/3 text-center'>
                    <div className='flex-1'>
                        <h1 className='font-extrabold text-2xl underline'>Our Vision</h1>
                        <p className=' text-left lg:text-center text-xs'>Our Vision is to become #1 company which provides services and solutions to all the needs of online selling sellers. We are growing, and our growth is directly proportional the growth of our Clients</p>
                    </div>
                    <div className='flex-1'>
                        <h1 className='font-extrabold text-2xl underline'>Our History</h1>
                        <p className=' text-left lg:text-center text-xs'>We are a team of expert ecommerce professionals who have worked with different ecommerce platforms in their past, we have been appreciated by our clients for providing good results</p>
                    </div>
                </div>
            </div>
            <ContactForm />
        </Layout>

    )
}

export default AboutUs