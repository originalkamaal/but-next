import React from 'react';

const ServiceCard = ({ data }) => {
  let icon = data.icon;
  icon = icon[Object.keys(icon)[0]];

  //icon = icon[Object.keys(icon)[0]];
  return (
    <div className="relative bg-gray-100 m-1 md:m-2 p-3 pb-[40px] md:pt-5 rounded-md flex-col justify-between">
      <div>
        <div className="flex w-full items-center">
          <img src={icon} className="w-12 md:w-16 h-12 md:h-16" />
          <div className="md:text-2xl pl-2 font-extrabold text-budarkblue leading-4">
            {data.title}
          </div>
        </div>
        <div className="text-budarkblue pt-2">{data.desc}</div>
      </div>

      <div className="absolute bottom-3 right-3 w-min pt-[100px] text-white">
        <a
          className="bg-budarkblue px-3 py-1 rounded-md"
          href={data.link}
          alt={data.title}
        >
          Browse
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
