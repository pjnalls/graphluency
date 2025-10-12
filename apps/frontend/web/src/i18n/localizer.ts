import { translation } from './translation';

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

export type Localizer = { [key: string]: (typeof translation)['en-US'] };

export type LocalizerProps = { locale: string };

export const i18n = translation as unknown as Localizer;

export const getLocale = () => {
  const languages: string[] = [];
  const translationKeys = Object.keys(i18n);

  navigator.languages.forEach((lang) => {
    translationKeys.forEach((key) => {
      if (lang.split('-')[0] === key.split('-')[0]) {
        languages.push(key);
        return;
      }
    })
  })
  return languages.length > 0 ? languages[0] : 'en-US';
};
