'use client';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const scrollToCenter = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    // Ensure event.currentTarget and href attribute exist before using them
    const targetHref = event.currentTarget?.getAttribute('href');

    if (targetHref) {
      const targetId = targetHref.substring(1);
      const targetDiv = document.getElementById(targetId);

      if (targetDiv && targetId === 'clients') {
        const centerPosition =
          targetDiv.offsetTop - 200 + targetDiv.clientHeight / 2;
        window.scrollTo({ top: centerPosition, behavior: 'smooth' });
      } else if (targetDiv) {
        const centerPosition = targetDiv.offsetTop;
        window.scrollTo({ top: centerPosition, behavior: 'smooth' });
      }
    }
  };
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4 absolute">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a className="sm:hidden flex-none" href="#">
            <Image src="/logo/white.png" alt="logo" width="64" height="64" />
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-image-1"
              aria-controls="navbar-image-1"
              aria-label="Toggle navigation"
              onClick={() => {
                toggleNavbar();
              }}
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-image-1"
          className={`hs-collapse ${
            isNavbarOpen ? 'block' : 'hidden'
          } overflow-hidden transition-all duration-300 basis-full grow sm:block`}
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            <a
              className="font-medium text-white-500"
              href="#home"
              onClick={scrollToCenter}
              aria-current="page"
            >
              About Me
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              href="#clients"
              onClick={scrollToCenter}
            >
              Portifólio
            </a>
            <a
              className="font-medium text-black bg-[#fdad16] rounded-full p-2 pl-4 pr-4"
              href="#services"
              onClick={scrollToCenter}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
