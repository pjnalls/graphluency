import { ImageSourcePropType } from 'react-native';

import { CountryName, LanguageAbilityProps } from './ability';
import { LanguagesLearningProps } from './learning';


export type ProfileShortProps = {
  abilities: [LanguageAbilityProps, LanguageAbilityProps];
  learning: LanguagesLearningProps;
  location: CountryName;
  name: string;
  profilePic: ImageSourcePropType | undefined;
};
