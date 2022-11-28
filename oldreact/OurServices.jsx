import React from 'react';

import SectionTitle from '../core-components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import AccountManagementIcon from '../assets/AccountManagementIcon.png';
import AdsAndDMIcon from '../assets/AdsAndDMIcon.png';
import AppDevIcon from '../assets/AppDevIcon.png';
import ListingAndCatalogingIcon from '../assets/ListingAndCatalogingIcon.png';
import NewAccountRegistrationIcon from '../assets/NewAccountRegistrationIcon.png';
import ProductPhotographyIcon from '../assets/ProductPhotographyIcon.png';
import SellerReinstatementIcon from '../assets/SellerReinstatementIcon.png';
import SellerTrainingIcon from '../assets/SellerTrainingIcon.png';
//title, desc, icon, link
const OurServices = () => {
  let services = [
    {
      title: 'New Account Registration',
      desc: 'Planing to start selling on online marketplaces? We will take care of account registration process and will get you started smoothly.',
      icon: { NewAccountRegistrationIcon },
      link: '#',
    },
    {
      title: 'Account Management',
      desc: 'Need help to manage and grow your e-commerce business? Our expert account managers are here to help you.',
      icon: { AccountManagementIcon },
      link: '#',
    },
    {
      title: 'Product Photoshoot',
      desc: 'Do you want to showcase your products with high quality Imagery? We can help you increase views for your product following marketplace guidelines.',
      icon: { ProductPhotographyIcon },
      link: '#',
    },
    {
      title: 'Listing & Cataloging',
      desc: 'We are expert in creating apealing catalog with optimised content that will attract more customers.',
      icon: { ListingAndCatalogingIcon },
      link: '#',
    },
    {
      title: 'Seller Training',
      desc: 'Understand from our exports, the different tools and policies needed to grow your business',
      icon: { SellerTrainingIcon },
      link: '#',
    },
    {
      title: 'Advertisements & Digital Marketing',
      desc: 'Getting low visibility, or you want to promote your products or brand? Let our Digital marketing experts manage your advertisements',
      icon: { AdsAndDMIcon },
      link: '#',
    },
    {
      title: 'Seller Account Reinstatement',
      desc: "Has your account been deactivated or been put on-hold? Our experts will help you reinstate your account and assist you to ensure your accounts don't get suspended in future.",
      icon: { SellerReinstatementIcon },
      link: '#',
    },
    {
      title: 'Own Ecommerce Website / App',
      desc: 'Willing to start your online store website and/or app? Let us do it for you. We can build performing website, android and ios apps using modern technologies.',
      icon: { AppDevIcon },
      link: '#',
    },
  ];
  return (
    <div>
      <SectionTitle title="Our Services" link="#" linkTitle="View All" />
      <div className="grid grid-cols-2 lg:grid-cols-4 px-3">
        {services.map((el, i) => {
          return <ServiceCard key={i} data={el} />;
        })}
      </div>
    </div>
  );
};

export default OurServices;
