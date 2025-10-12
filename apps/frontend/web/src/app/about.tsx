import React from 'react';

import { LocalizerProps, i18n as t } from '../i18n/localizer';
import aboutImage from '../assets/about.webp';

export const About: React.FC<LocalizerProps> = ({ locale }) => {
  return (
    <section className="py-4" id="about">
      <div className="py-8">
        <h2 className="text-center lg:text-5xl md:text-4xl text-3xl mb-6 text-blue-900">
          {t[locale].about.title}
        </h2>
        <hr className="w-[48px] mx-auto border-0 h-[1.2px] bg-zinc-300" />
      </div>
      <div className="lg:max-w-[1200px] md:max-w-[1000] md:flex-row max-w-[768] px-6 flex flex-col gap-12 items-center justify-center mx-auto">
        <img
          className="md:w-1/2 w-full"
          alt={t[locale].about.imageAltText}
          src={aboutImage}
        />
        <div className="md:w-1/2 w-full">
          <h3 className="text-xl text-zinc-700 mb-6">
            {t[locale].about.subtitle}
          </h3>
          <p className="text-zinc-800 font-light">
            {t[locale].about.description}
          </p>
        </div>
      </div>
    </section>
  );
};
