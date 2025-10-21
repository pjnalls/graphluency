import { CountryCode, CountryName } from './ability';

export type LanguageLearningProps = {
  countryCode: CountryCode;
  countryName: CountryName;
};
export type LanguagesLearningProps = [
    LanguageLearningProps?,
    LanguageLearningProps?,
    LanguageLearningProps?,
    LanguageLearningProps?,
];
