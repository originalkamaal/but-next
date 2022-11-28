import React from 'react';
const WhyBrightUrbanCard = ({ logo, title, description }) => {
  return (
    <div className="w-full flex flex-col justify-center space-y-4 items-center px-4 pb-3">
      <div className="md:w-32 w-20">
        <img src={logo} alt={title} />
      </div>
      <div className="font-bold">{title}</div>
      <div className="md:w-[400px] text-center">{description}</div>
    </div>
  );
};
export default WhyBrightUrbanCard;
