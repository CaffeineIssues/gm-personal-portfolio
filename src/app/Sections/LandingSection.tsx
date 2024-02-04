/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import SectionContainer from '@components/SectionContainer';
import { IoMdSearch, IoMdMail, IoIosCall } from 'react-icons/io';
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
      <div className="lg:w-full relative">
        <div className="w-[10em] flex  justify-center rounded-full p-2 pl-4 pr-4 bg-[#fdad16] top-[15em] left-[7em] absolute">
          11nd May 1996
        </div>
        <div className="w-[10em] flex  justify-center rounded-full p-2 pl-4 pr-4 bg-[#fdad16] top-[23em] right-[7em] absolute">
          Brazilian
        </div>
        <div className="h-screen flex-1 bg-black m-36 items-center justify-center">
          <div className="w-full bg-[#334b35] h-1/2 flex pt-12 pb-12 items-center justify-center">
            <img
              src="/profile.jpg"
              alt="profilepic"
              className="h-[19em] w-[19em] rounded-full center"
            />
          </div>
          <div className="w-full flex items-center justify-center  text-white ">
            <h1 className={`${orbitronText.className} text-4xl mt-4 font-bold`}>
              Contact
            </h1>
          </div>
          <div className="w-full flex items-center justify-center p-4  text-white ">
            <ul>
              <li className="flex items-center justif-center w-full gap-4">
                <IoMdMail />{' '}
                <span>
                  gmdoas.<span className="text-orange-600">dev</span>
                  @gmail.com{' '}
                </span>
              </li>
              <li className="flex items-center justif-center w-full gap-4 mt-4">
                <IoIosCall /> <span>+55 (85) 9 8119-2976</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default LandingSection;
