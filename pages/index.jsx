import Layout from '../frontend/layouts/Main';

import Banner from '../frontend/components/Banner';
import ContactForm from '../frontend/components/ContactForm';
import WhyBrightUrban from '../frontend/containers/WhyBrightUrban';
import OurServices from '../frontend/containers/OurServices';
import BlogsHome from '../frontend/containers/BlogsHome';
import OurAchievements from '../frontend/containers/OurAchievements';
import SectionTitle from '../frontend/components/SectionTitle';
import { useSession, signIn, signOut } from "next-auth/react";


export default function Home() {
  const { data: session } = useSession();
  
  return (

    <Layout>

      <Banner />
      <WhyBrightUrban />

      <OurServices />

      <BlogsHome />

      <OurAchievements />
      <SectionTitle title="Contact Us" />
      <ContactForm />




    </Layout>

  );

}

