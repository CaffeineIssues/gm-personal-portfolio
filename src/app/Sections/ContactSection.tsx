// src/app/Sections/ContactSection.tsx

import React from 'react';
import SectionContainer from '../Components/SectionContainer';
import { Orbitron } from 'next/font/google';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiExternalLink,
} from 'react-icons/fi';

const orbitronText = Orbitron({ subsets: ['latin'] });

const contactLinks = [
  {
    label: 'Email',
    value: 'gmdoas.dev@gmail.com',
    href: 'mailto:gmdoas.dev@gmail.com',
    icon: FiMail,
  },
  {
    label: 'Phone',
    value: '+55 85 98119-2976',
    href: 'https://wa.me/5585981192976',
    icon: FiPhone,
  },
  {
    label: 'Location',
    value: 'Fortaleza, Ceará',
    href: 'https://www.google.com/maps/search/Fortaleza+Cear%C3%A1',
    icon: FiMapPin,
  },
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/CaffeineIssues',
    icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gmdoas-dev',
    icon: FiLinkedin,
  },
];

function ContactSection() {
  return (
    <SectionContainer className="min-h-screen w-full overflow-hidden bg-[#f6eee0] px-4 py-20 sm:px-8 lg:px-12 xl:px-20">
      <div className="mx-auto grid min-h-screen w-full max-w-[1440px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="w-full">
          <p
            className={`${orbitronText.className} mb-4 text-sm font-bold uppercase tracking-[0.35em] text-black`}
          >
            Contact
          </p>

          <h1
            className={`${orbitronText.className} max-w-[10em] text-5xl font-bold leading-none text-black sm:text-6xl lg:text-7xl xl:text-8xl`}
          >
            Let's Work Together
          </h1>

          <p className="mt-8 max-w-[38rem] text-base leading-relaxed text-black/75 sm:text-lg">
            Have a project, website, system or idea that needs development? Send
            me a message and I will get back to you.
          </p>

          <div className="mt-10 grid max-w-[42rem] grid-cols-1 gap-4">
            {contactLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'Email' ? undefined : '_blank'}
                  rel={
                    item.label === 'Email' ? undefined : 'noopener noreferrer'
                  }
                  className="group flex items-center gap-5 rounded-2xl border-2 border-black bg-black/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-black"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-black text-yellow-500 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-black">
                    <Icon size={26} />
                  </div>

                  <div>
                    <p
                      className={`${orbitronText.className} text-sm font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 group-hover:text-yellow-500`}
                    >
                      {item.label}
                    </p>

                    <p className="mt-1 text-sm font-bold text-white sm:text-base">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border-2 border-black bg-black px-6 py-3 font-bold text-yellow-500 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
                >
                  <Icon size={20} />
                  {item.label}
                  <FiExternalLink size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="w-full">
          <form
            action="mailto:gmdoas.dev@gmail.com"
            method="POST"
            encType="text/plain"
            className="mx-auto w-full max-w-[38rem] rounded-[2rem] border-2 border-black bg-black p-6 shadow-[16px_16px_0px_rgba(255,255,255,0.25)] sm:p-8 lg:mx-0 lg:ml-auto"
          >
            <h2
              className={`${orbitronText.className} text-3xl font-bold text-yellow-500 sm:text-4xl`}
            >
              Send Message
            </h2>

            <div className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border-2 border-yellow-500 bg-transparent px-4 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/40 focus:border-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border-2 border-yellow-500 bg-transparent px-4 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/40 focus:border-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border-2 border-yellow-500 bg-transparent px-4 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/40 focus:border-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className={`${orbitronText.className} mt-8 w-full rounded-xl bg-yellow-500 px-6 py-4 font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white`}
            >
              Contact Me
            </button>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
}

export default ContactSection;
