// OurWork.js
import React from 'react';
import CarouselHeader from './CarouselHeader';
import WorkSection from './WorkSection';

const OurWork = () => {
  return (
    <div>
      <CarouselHeader />
      <WorkSection title="Rural" articles={ruralArticles} />
      <WorkSection title="Urban" articles={urbanArticles} />
    </div>
  );
};

export default OurWork;
