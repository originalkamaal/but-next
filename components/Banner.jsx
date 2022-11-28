import React from 'react';
import Hero from '../assets/Hero.png'
import Image from 'next/image'

const renderSwitch = ({
  title,
  className,
  btnTitile,
  btnLink,
  btnType = 0,
}) => {
  switch (btnType) {
    case 0:
      return (
        <div className="relative text-white w-full px-2 md:px-4">
          <a href="" className="w-full">
            <Image src={Hero} className="w-full" />
          </a>
        </div>
      );
    default:
      return 'foo';
  }
};

const Banner = ({ title, btnTitile, btnLink, btnType = 0 }) => {
  return renderSwitch(btnType);
};

export default Banner;
