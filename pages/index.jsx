import Layout from '../layouts/Main';

import Banner from '../components/Banner';
import WhyBrightUrban from '../containers/WhyBrightUrban'
import OurServices from '../containers/OurServices'
import BlogsHome from '../containers/BlogsHome'
import OurAchievements from '../containers/OurAchievements'


export default function Home() {

  return (

    <Layout>

      <Banner />
      <WhyBrightUrban />

      <OurServices />

      <BlogsHome />

      <OurAchievements />

      


    </Layout>

  );

}

