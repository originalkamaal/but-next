import React from 'react';
//import BannerStats from '../assets/Hero.png';
import Image from 'next/image';

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
            <Image
              src="https://raw.githubusercontent.com/originalkamaal/but-react/main/src/assets/illustrations/Hero.png"
              width={100}
              height={60}
              className="w-full"
            />
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
