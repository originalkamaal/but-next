import React from 'react';

import SectionTitle from '../core-components/SectionTitle';
import BlogsCard from '../components/BlogsCard';
//title, desc, icon, link
const OurServices = () => {
  return (
    <div>
      <SectionTitle title="Recent Blog Posts" link="#" linkTitle="View All" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 px-6">
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
      </div>
    </div>
  );
};

export default OurServices;
