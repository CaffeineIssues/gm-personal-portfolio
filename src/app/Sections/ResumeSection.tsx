import React from 'react';
import SectionContainer from '../Components/SectionContainer';
import { Orbitron } from 'next/font/google';

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiVuedotjs,
  SiMysql,
  SiPostgresql,
  SiGit,
} from 'react-icons/si';

const orbitronText = Orbitron({ subsets: ['latin'] });

const stackItems = [
  {
    name: 'React',
    icon: SiReact,
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
  },
  {
    name: 'Tailwind',
    icon: SiTailwindcss,
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
  },
  {
    name: 'PHP',
    icon: SiPhp,
  },
  {
    name: 'Laravel',
    icon: SiLaravel,
  },
  {
    name: 'Vue.js',
    icon: SiVuedotjs,
  },
  {
    name: 'MySQL',
    icon: SiMysql,
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
  },
  {
    name: 'Git',
    icon: SiGit,
  },
];

export default function ResumeSection() {
  return (
    <SectionContainer className="bg-[#334b35] min-h-screen w-full p-4 grid lg:grid-cols-2 gap-8 overflow-normal">
      <div className="w-full">
        <div className="min-h-screen flex items-center w-full justify-center relative">
          <div className="xl:p-28 space-y-8 xl:absolute xl:top-[-4em] p-4 w-full">
            <h1
              className={`${orbitronText.className} font-bold text-white text-5xl`}
            >
              Education
            </h1>

            <ol className="relative border-s border-orange-600">
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-orange-600 bg-yellow-500" />
                <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                  2016-2025
                </h3>
                <h3 className="text-white font-bold">Computer Science</h3>
                <p className="mb-4 text-base font-normal text-gray-400">
                  IFCE - Instituto Federal de Ciência e Técnologia do Estado do
                  Ceará - Campus Maracanaú
                </p>
              </li>

              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-orange-600 bg-yellow-500" />
                <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                  2022-2023
                </h3>
                <h3 className="text-white font-bold">
                  FullStack Javascript Developer
                </h3>
                <p className="mb-4 text-base font-normal text-gray-400">
                  Udacity - Silicon Valley University
                </p>
              </li>

              <li className="ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-orange-600 bg-yellow-500" />
                <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                  2010-2013
                </h3>
                <h3 className="text-white font-bold">
                  IT and Computer Network Technician
                </h3>
                <p className="mb-4 text-base font-normal text-gray-400">
                  E.E.E.P Juarez Távora
                </p>
              </li>

              <li className="ms-6 h-[2em] mb-[-2em]" />
            </ol>

            <div className="bg-yellow-500 min-h-[30em] xl:w-[40em] lg:w-[40em] p-6">
              <h1
                className={`${orbitronText.className} font-bold text-black text-5xl`}
              >
                Experience
              </h1>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-black font-bold text-xl">
                    Full Stack Developer
                  </h3>
                  <p className="text-black/80 mt-2">
                    Experience building web systems, dashboards, APIs, imports,
                    admin panels and responsive interfaces.
                  </p>
                </div>

                <div>
                  <h3 className="text-black font-bold text-xl">
                    Frontend Development
                  </h3>
                  <p className="text-black/80 mt-2">
                    React, Next.js, Vue, Tailwind CSS and modern component-based
                    interfaces.
                  </p>
                </div>

                <div>
                  <h3 className="text-black font-bold text-xl">
                    Backend Development
                  </h3>
                  <p className="text-black/80 mt-2">
                    Laravel, PHP, Node.js, database modeling and spreadsheet
                    import workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full z-50">
        <div className="w-full flex flex-col items-center justify-center text-center mt-[5em] px-4">
          <div className="space-y-[-0.8em]">
            <h1
              style={{
                WebkitTextStroke: '2px white',
                color: 'transparent',
              }}
              className={`${orbitronText.className} text-7xl sm:text-8xl font-bold text-transparent drop-shadow-[2px_2px_10px_white]`}
            >
              Stack
            </h1>

            <h1
              className={`${orbitronText.className} font-bold text-black text-7xl sm:text-8xl`}
            >
              Stack
            </h1>
          </div>

          <div className="mt-12 w-full max-w-[34em] grid grid-cols-2 sm:grid-cols-3 gap-5">
            {stackItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className="group min-h-[8em] border-2 border-yellow-500 bg-black/20 backdrop-blur-sm rounded-2xl px-4 py-5 flex flex-col items-center justify-center gap-3 hover:bg-yellow-500 transition-all duration-300"
                >
                  <Icon className="text-yellow-500 text-5xl group-hover:text-black transition-all duration-300" />

                  <span
                    className={`${orbitronText.className} text-white text-sm font-bold group-hover:text-black transition-all duration-300`}
                  >
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="mt-8 max-w-[32em] text-gray-300 text-sm sm:text-base leading-relaxed">
            I build full stack applications with modern frontend interfaces,
            structured backend logic and clean database-driven workflows.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
