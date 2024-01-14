/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import SectionContainer from '@components/SectionContainer';

function LandingSection() {
  return (
    <SectionContainer
      className={
        'bg-[#f6eee0] p-4 h-screen w-full grid lg:grid-cols-2  sm:flex-row'
      }
    >
      <div className="bg-black lg:w-full sm:w-screen">
        <div className="h-screen flex items-center justify-center">
          <div className="lg:p-28 space-y-6">
            <h1 className="text-7xl text-white font-bold">Hello,</h1>
            <h2 className="text-7xl  text-white font-bold">I'm Gabriel</h2>
            <p className="text-white text-justify">
              I am a self-taught Software Developer based in Brazil with
              extensive FullStack and Mobile experience. I am currently living
              in Fortaleza, Ceará and pursuing a degree in Computer Science at
              IFCE - Instituto Fedederal de Ciencia e Educacao do Estado do
              Ceará.
            </p>
            <div>
              <a
                className="text-white"
                href="https://www.linkedin.com/in/gmdoas-dev/"
              >
                https://www.linkedin.com/in/gmdoas-dev/
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black lg:w-full">qew</div>
    </SectionContainer>
  );
}

export default LandingSection;
