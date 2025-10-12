import React from 'react';
import { LocalizerProps, i18n as t } from '../i18n/localizer';

import featuresImage from '../assets/features.webp';

export const Features: React.FC<LocalizerProps> = ({ locale }) => {
  return (
    <section className="px-6 lg:max-w-[1200px] md:max-w-[1000] max-w-[768] mx-auto my-20">
      <h2 className="text-center lg:text-5xl md:text-4xl text-3xl mb-6 text-blue-900">
        {t[locale].features.title}
      </h2>
      <hr className="w-[48px] mx-auto border-0 h-[1.2px] bg-zinc-300 mb-8" />
      <img
        className="w-full"
        alt={t[locale].features.image6AltText}
        src={featuresImage}
      />
    </section>
  );
};
