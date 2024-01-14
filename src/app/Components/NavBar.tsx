import React from 'react';

export default function Header() {
  return (
    <header className="bg-[#f6eee0] sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3  w-full">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div className="text-black text-xl font-bold">gmdoas.dev</div>
        <button className="text-black focus:outline-none sm:hidden md:hidden">
          Menu
        </button>
      </div>
      <nav className="sm:flex sm:items-center sm:px-4 sm:py-3">
        <a
          href="#"
          className="block px-2 py-1 text-black rounded hover:bg-gray-700 sm:mt-0 sm:ml-2 "
        >
          About Me
        </a>
        <a
          href="#"
          className="block px-2 py-1 text-black rounded hover:bg-gray-700 sm:mt-0 sm:ml-2"
        >
          Projects
        </a>
        <a
          href="#"
          className="block px-2 py-1 text-black rounded hover:bg-gray-700 sm:mt-0 sm:ml-2"
        >
          Get in touch!
        </a>
      </nav>
    </header>
  );
}
