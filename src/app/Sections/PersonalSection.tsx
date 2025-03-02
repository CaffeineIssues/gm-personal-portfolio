import React from 'react';
import SectionContainer from '../Components/SectionContainer';

function PersonalSection() {
  return (
    <SectionContainer
      className={
        'bg-black  h-screen min-h-full w-full p-4 grid lg:grid-cols-2  sm:flex-row'
      }
    >
      <div className="lg:w-full sm:w-screen"></div>
    </SectionContainer>
  );
}

export default PersonalSection;
