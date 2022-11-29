import Layout from '../layouts/Main';

import Banner from '../components/Banner';
import ContactForm from '../components/ContactForm';
import WhyBrightUrban from '../containers/WhyBrightUrban'
import OurServices from '../containers/OurServices'
import BlogsHome from '../containers/BlogsHome'
import OurAchievements from '../containers/OurAchievements'
import SectionTitle from '../components/SectionTitle';


export default function Home() {

  return (

    <Layout>

      <Banner />
      <WhyBrightUrban />

      <OurServices />

      <BlogsHome />

      <OurAchievements />
      <SectionTitle title="Contact Us"/>
      <ContactForm/>

      


    </Layout>

  );

}

