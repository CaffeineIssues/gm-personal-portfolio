'use client';

import React, { useEffect, useState } from 'react';
import SectionContainer from '../Components/SectionContainer';
import { Orbitron } from 'next/font/google';

const orbitronText = Orbitron({ subsets: ['latin'] });

const projects = [
  {
    name: 'SINCONPE/CE',
    logo: '/projects/sinconpe.png',
    website: 'https://sinconpece.com.br/',
  },
  {
    name: 'SECULT',
    logo: '/projects/secult.png',
    website: 'https://www.ce.gov.br/secult/',
  },
  {
    name: 'Deovita',
    logo: '/projects/deovita.png',
    website: 'https://deovita.com.br/',
  },
  {
    name: 'JULIPET',
    logo: '/projects/julipet.webp',
    website: 'https://julipet24horas.com.br/',
  },
  {
    name: 'Listados',
    logo: '/projects/listados.png',
    website: 'https://360.site.listados.com.br/tour',
  },
  {
    name: 'Infinity',
    logo: '/projects/infinity.png',
    website: 'https://www.instagram.com/infinitydistribuidoraoficial/',
  },
  {
    name: 'SSB',
    logo: '/projects/ssb.png',
    website: 'https://ssbconstrutora.com.br/',
  },
  {
    name: 'RASTREIO',
    logo: '/projects/rastreio.png',
    website: 'https://rastreiocar.com/',
  },
  {
    name: 'PROTEGE',
    logo: '/projects/protege.png',
    website: 'https://protegeexpress.com.br/',
  },
  {
    name: 'CALDO',
    logo: '/projects/caldo.png',
    website: 'https://www.instagram.com/caldodebilaoficial/',
  },
];

const carouselProjects = [...projects, ...projects, ...projects];

function cropTransparentPixels(src: any) {
  return new Promise((resolve) => {
    const image = new window.Image();

    image.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        resolve(src);
        return;
      }

      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      ctx.drawImage(image, 0, 0);

      const { data, width, height } = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height,
      );

      let top = height;
      let left = width;
      let right = 0;
      let bottom = 0;

      const alphaThreshold = 10;

      for (let y = 0; y < height; y += 1) {
        for (let x = 0; x < width; x += 1) {
          const alpha = data[(y * width + x) * 4 + 3];

          if (alpha > alphaThreshold) {
            if (x < left) left = x;
            if (x > right) right = x;
            if (y < top) top = y;
            if (y > bottom) bottom = y;
          }
        }
      }

      const hasVisiblePixels = right > left && bottom > top;

      if (!hasVisiblePixels) {
        resolve(src);
        return;
      }

      const croppedWidth = right - left + 1;
      const croppedHeight = bottom - top + 1;

      const croppedCanvas = document.createElement('canvas');
      const croppedCtx = croppedCanvas.getContext('2d');

      if (!croppedCtx) {
        resolve(src);
        return;
      }

      croppedCanvas.width = croppedWidth;
      croppedCanvas.height = croppedHeight;

      croppedCtx.drawImage(
        canvas,
        left,
        top,
        croppedWidth,
        croppedHeight,
        0,
        0,
        croppedWidth,
        croppedHeight,
      );

      resolve(croppedCanvas.toDataURL('image/png'));
    };

    image.onerror = () => resolve(src);
    image.src = src;
  });
}

function LogoItem({ project }) {
  const [croppedLogo, setCroppedLogo] = useState(project.logo);

  useEffect(() => {
    let active = true;

    cropTransparentPixels(project.logo).then((result) => {
      if (active) {
        setCroppedLogo(result);
      }
    });

    return () => {
      active = false;
    };
  }, [project.logo]);

  return (
    <a
      href={project.website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${project.name}`}
      title={project.name}
      className="group relative flex h-32 w-52 shrink-0 items-center justify-center transition-all duration-300 hover:-translate-y-2 sm:h-40 sm:w-64"
    >
      <div className="flex h-24 w-44 items-center justify-center sm:h-28 sm:w-52">
        <img
          src={croppedLogo}
          alt={`${project.name} logo`}
          className="h-full w-full object-contain opacity-80 transition-all duration-300 [filter:grayscale(1)_invert(1)_brightness(1.8)_contrast(0.95)] group-hover:scale-110 group-hover:opacity-100 group-hover:[filter:grayscale(1)_invert(1)_brightness(2)_contrast(1.05)]"
        />
      </div>
    </a>
  );
}

function PersonalSection() {
  return (
    <SectionContainer className="bg-black min-h-screen w-full overflow-hidden px-4 py-20 sm:px-8 lg:px-12 xl:px-20">
      <div className="mx-auto mt-6 flex min-h-screen w-full max-w-[1440px] flex-col justify-start">
        <div className="mb-16">
          <p
            className={`${orbitronText.className} mb-3 text-right text-sm font-bold uppercase tracking-[0.35em] text-yellow-500`}
          >
            Portfolio
          </p>

          <h1
            className={`${orbitronText.className} text-right text-5xl font-bold text-white sm:text-6xl lg:text-7xl`}
          >
            Projects
          </h1>

          <p className="mt-5 text-right text-sm leading-relaxed text-gray-400 sm:text-base lg:text-lg">
            Projects and companies I have worked with
          </p>
        </div>

        <div className="relative w-full overflow-hidden py-10">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent" />

          <div className="logo-track flex w-max items-center gap-16">
            {carouselProjects.map((project, index) => (
              <LogoItem
                key={`${project.name}-${project.logo}-${index}`}
                project={project}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .logo-track {
          animation: logo-scroll 24s linear infinite;
        }

        .logo-track:hover {
          animation-play-state: paused;
        }

        @keyframes logo-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </SectionContainer>
  );
}

export default PersonalSection;
