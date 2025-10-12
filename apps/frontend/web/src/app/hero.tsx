import React from 'react';
import { LocalizerProps, i18n as t } from '../i18n/localizer';

export const Hero: React.FC<LocalizerProps> = ({ locale }) => {
  const handleOnClick = () => {
    window.location.href = '#about';
  };

  return (
    <section>
      <h1 className="text-white text-center text-2xl py-4">
        {t[locale].title}
      </h1>
      <hr className="mx-10 border-0 h-[1.2px] bg-zinc-400" />
      <div className="h-[440px] lg:h-[720px] xl:max-w-[1200px] lg:max-w-[1000px] max-w-[768] px-6 flex flex-col items-center justify-center mx-auto">
        <h2 className="text-white text-center lg:text-7xl md:text-6xl text-5xl mb-4">
          {t[locale].subtitle}
        </h2>
        <h3 className="text-white text-center lg:text-3xl md:text-2xl text:2xl mb-8 font-light">
          {t[locale].slogan}
        </h3>
        <button
          onClick={handleOnClick}
          className="bg-white text-blue-950 uppercase tracking-wide font-semibold px-8 py-4 md:w-fit w-full"
        >
          {t[locale].learn}
        </button>
      </div>
    </section>
  );
};
