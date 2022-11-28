import React from 'react';
import WhyBrightUrbanCard from '../components/WhyBrightUrbanCard';
import BestPricing from '../assets/illustrations/BestPricing.png';
import ExpertTeam from '../assets/illustrations/ExpertTeam.png';
import MultipleService from '../assets/illustrations/MultipleService.png';
import QuickSupport from '../assets/illustrations/QuickSupport.png';
import SectionTitle from '../core-components/SectionTitle';

const WhyBrightUrban = ({ title }) => {
  return (
    <div>
      <SectionTitle title="Why BrightUrban" />
      <div className="md:grid md:grid-cols-2 space-y-5">
        <WhyBrightUrbanCard
          logo={BestPricing}
          title="Best & Competative Pricing."
          description="We ensure to provide efficient services in your budget and have transparency at every step if it exceeds your budget depending on your requirements."
        />
        <WhyBrightUrbanCard
          logo={MultipleService}
          title="Multiple Services at One Place"
          description="We almost cover all the services which are needed by online sellers, we save time of our clients by providing almost all services at one place."
        />
        <WhyBrightUrbanCard
          logo={ExpertTeam}
          title="Team of Experts & Professionals."
          description="Its very important to have quality skills to provide quality services. We are experts, ex-employees of major Market Places."
        />
        <WhyBrightUrbanCard
          logo={QuickSupport}
          title="Faster Service & Support."
          description="We ensure that our clients are getting good service consistently, we have a separete support team who ensures clients are satisfied with our services"
        />
      </div>
    </div>
  );
};

export default WhyBrightUrban;
