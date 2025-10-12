import { LocalizerProps, i18n as t } from '../i18n/localizer';

export const Footer: React.FC<LocalizerProps> = ({ locale }) => {
  return (
    <footer className='pb-24'>
      <p className="text-center text-zinc-500 text-xs font-light mb-6">
        {t[locale].copyright}
      </p>
      <hr className="w-[48px] mx-auto border-0 h-[1.2px] bg-zinc-300" />
    </footer>
  );
};
