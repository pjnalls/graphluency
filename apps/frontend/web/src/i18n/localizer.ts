
import { localization } from './localization';

export enum LocalizerActionTypes {
  LOCALIZE = 'LOCALIZE',
}

interface Localize {
  type: LocalizerActionTypes.LOCALIZE;
  payload: {
    locale: string;
  };
}

export type LocalizerActions = Localize;

export type Localizer = { [key: string]: (typeof localization)['en-US'] };

export type LocalizerProps = { locale: string }; 

export const i18n = localization as unknown as Localizer;

export const getLocale = () => {
  const languages = Object.keys(i18n).filter(
    (lang) => lang === navigator.language
  );
  return languages.length > 0 ? languages[0] : 'en-US';
};
