import React from 'react';
import SectionContainer from '../Components/SectionContainer';
import { Orbitron } from 'next/font/google';

const orbitronText = Orbitron({ subsets: ['latin'] });

export default function ResumeSection() {
  return (
    <SectionContainer className="bg-[#334b35] h-screen min-h-full w-full p-4 grid lg:grid-cols-2  sm:flex-row">
      <div className="lg:w-full sm:w-screen">
        <div className="h-screen flex items-center justify-center relative">
          <div className="lg:p-28 space-y-8 absolute top-[-4em]">
            <h1
              className={`${orbitronText.className} font-bold text-white text-5xl`}
            >
              Education
            </h1>
            <ol className="relative border-s border-gray-200 dark:border-orange-600">
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-orange-600 dark:bg-yellow-500"></span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  2016-2024
                </h3>
                <h3 className="text-white font-bold">Computer Science</h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  IFCE - Instituto Federal de Ciência e Técnologia do Estado do
                  Ceará - Campus Maracanaú
                </p>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white  dark:ring-orange-600 dark:bg-yellow-500"></span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  2022-2023
                </h3>
                <h3 className="text-white font-bold">
                  FullStack Javascript Developer
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Udacity - Silicon Valley University
                </p>
              </li>
              <li className="ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white  dark:ring-orange-600 dark:bg-yellow-500"></span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  2010-2013
                </h3>
                <h3 className="text-white font-bold">
                  IT and Computer Network Technician
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  E.E.E.P Juarez Távora
                </p>
              </li>
              <li className="ms-6 h-[2em]"></li>
            </ol>
            <div className=" bg-yellow-500 h-[30em] w-[40em] absolute top-[32em] left-[3em]">
              {' '}
              <h1
                className={`${orbitronText.className} font-bold text-black ml-[1.3em] mt-[0.5em] text-5xl`}
              >
                Experience
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-full sm:w-screen"></div>
    </SectionContainer>
  );
}
