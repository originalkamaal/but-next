import React from 'react';
import HomeStats from '../components/HomeStats';

import SectionTitle from '../core-components/SectionTitle';
const OurAchievements = ({ theme }) => {
  let color = theme == 'dark' ? '#ffffff' : '#000000';
  return (
    <div>
      <SectionTitle title="Our Achievements" color={color} />
      <HomeStats />
    </div>
  );
};

export default OurAchievements;
