import React from 'react';

import SectionTitle from '../core-components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
const Testimonials = () => {
  return (
    <div>
      <SectionTitle title="Testimonials" />
      <div className="flex items-center justify-center bg-gray-100 py-10 lg:px-40  px-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div className="">
            <TestimonialCard />
          </div>
          <div className="w-full">
            <TestimonialCard />
          </div>
          <div className="w-full">
            <TestimonialCard />
          </div>
          <div className="w-full">
            <TestimonialCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
