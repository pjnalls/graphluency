import * as CountryFlags from 'country-flag-icons/react/3x2';
import { Platform } from 'react-native';
import RNCountryFlag from 'react-native-country-flag';

import { CountryCode } from '../types/ability';

export const getCountryFlagReactSvG = (
  countryCode: CountryCode,
  countryName: string,
  className?: string,
) => {
  if (Platform.OS === 'web') {
    const Flag = Object.values(CountryFlags).filter(
      (flag) => flag.name === countryCode,
    )[0];

    if (!Flag) {
      return CountryFlags.US({ title: 'UnitedStates' });
    } else {
      return Flag({
        title: countryName,
        className: 'w-8 md:w-10 rounded-sm',
      });
    }
  } else {
    return RNCountryFlag({
      isoCode: countryCode.toLowerCase(),
      size: 24,
      style: { borderRadius: 2 },
    });
  }
};
