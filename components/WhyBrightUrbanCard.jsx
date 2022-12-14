import React from 'react';
import Image from "next/image"
const WhyBrightUrbanCard = ({ logo, title, description }) => {
  return (
    <div className="w-full flex flex-col justify-start space-y-4 text-center items-center px-4 pb-3">
      <div className="md:w-32 w-20">
        <Image src={logo} alt={title} />
      </div>
      <div className="font-bold">{title}</div>
      <div className="md:w-[400px]">{description}</div>
    </div>
  );
};
export default WhyBrightUrbanCard;
