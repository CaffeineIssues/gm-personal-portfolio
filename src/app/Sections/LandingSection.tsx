/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import SectionContainer from '@components/SectionContainer';
import { IoMdSearch } from 'react-icons/io';
import { Orbitron } from 'next/font/google';
import Image from 'next/image';

const orbitronText = Orbitron({ subsets: ['latin'] });

function LandingSection() {
  return (
    <SectionContainer
      className={
        'bg-[#f6eee0]  h-screen min-h-full w-full p-4 grid lg:grid-cols-2  sm:flex-row'
      }
    >
      <div className="lg:w-full sm:w-screen">
        <div className="h-screen flex items-center justify-center mt-14">
          <div className="lg:p-28 space-y-6">
            <h1
              className={`${orbitronText.className} text-7xl text-black font-bold`}
            >
              Hello,
            </h1>
            <h2
              className={`${orbitronText.className} text-7xl  text-black font-bold`}
            >
              I'm Gabriel
            </h2>
            <p className="text-gray-400 text-justify">
              I am a self-taught Software Developer based in Brazil with
              extensive FullStack and Mobile experience. I am currently living
              in Fortaleza, Ceará and pursuing a degree in Computer Science at
              IFCE - Instituto Fedederal de Ciencia e Educacao do Estado do
              Ceará.
            </p>
            <div className="bg-orange-600 text-left rounded-full pt-4 pb-4">
              <IoMdSearch
                size="1.5em"
                className="leading-none inline-block align-middle ml-4 mr-[17%]"
                color="white"
              />
              <a
                className="text-white"
                href="https://www.linkedin.com/in/gmdoas-dev/"
              >
                Linkedin.com/in/gmdoas-dev/
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-full">
        <div className="h-screen flex-1 bg-black m-36 items-center justify-center">
          <div className="w-full bg-[#334b35] h-1/2 flex pt-12 pb-12 items-center justify-center">
            <img
              src="/profile.jpg"
              alt="profilepic"
              className="h-[20em] w-[20em] rounded-full center"
            />
          </div>
          <div></div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default LandingSection;
