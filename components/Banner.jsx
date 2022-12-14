import React from 'react';
import Hero from '../assets/Hero.svg'
import Image from 'next/image'
import Link from 'next/link';

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
          <Link href="/" className="w-full">
        <div className="relative text-white w-full px-2 md:px-4">
            <Image priority={true} src={Hero} className="w-full" height={400}/>
        </div>
          </Link>
      );
    default:
      return 'foo';
  }
};

const Banner = ({ title, btnTitile, btnLink, btnType = 0 }) => {
  return renderSwitch(btnType);
};

export default Banner;
