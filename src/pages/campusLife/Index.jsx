import React from 'react';
import CampusHero from './CampusHero';
import CampusCategories from './CampusCategories';
import CampusStats from './CampusStats';
import StudentTestimonials from './StudentTestimonials';
import UpcomingEvents from './UpcomingEvents';

const Index = () => {
  return (
    <div className="min-h-screen">
      <CampusHero />
      <CampusCategories />
      <CampusStats />
      <StudentTestimonials />
      <UpcomingEvents />
    </div>
  );
};

export default Index;
