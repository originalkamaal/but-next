import React from 'react';

import SectionTitle from '../components/SectionTitle';
import OurServiceCard from '../components/OurServiceCard';
import { service_groups } from '../utils/contexts/static_data';
//title, desc, icon, link
const OurServices = () => {

  return (
    <div>
      <SectionTitle title="Our Services" link="#" linkTitle="View All" />
      <div className="grid grid-cols-2 lg:grid-cols-4 px-3">
        {service_groups.map((el, i) => {
          return <OurServiceCard key={i} data={el} />;
        })}
      </div>
    </div>
  );
};

export default OurServices;
