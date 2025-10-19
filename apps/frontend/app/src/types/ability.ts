import { CountryCodes, CountryNames } from './countries';
import { Top100Languages } from './languages';

export const SkillLevels = [
  'A0',
  'A1',
  'A2',
  'B1',
  'B2',
  'C1',
  'Native',
] as const;

export type LanguageAbilityProps = {
  countryCode: CountryCode;
  countryName: CountryName;
  abilityName: AbilityName;
  currentLevel: SkillLevel;
};

export type CountryCode = (typeof CountryCodes)[number];
export type CountryName = (typeof CountryNames)[number];
export type AbilityName = (typeof Top100Languages)[number];
export type SkillLevel = (typeof SkillLevels)[number];
