import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { useColorScheme } from '../../hooks/useColorScheme';
import {
  LanguageAbilityProps,
  SkillLevel,
  SkillLevels,
} from '../../types/ability';
import { getCountryFlagReactSvG } from '../../utils/country';
import { cn } from '../../utils/twcn';

import { ThemedText } from '../ThemedText';

export default function LanguageAbility({
  countryCode,
  countryName,
  abilityName,
  currentLevel,
}: LanguageAbilityProps) {
  const colorScheme = useColorScheme() ?? 'light';

  const getStarColors = (currentLevel: SkillLevel = 'A0') => {
    const starColors: { color: string; level: SkillLevel }[] = [];

    for (const level of SkillLevels) {
      starColors.push({ color: 'gold', level });
      if (level === currentLevel) {
        break;
      }
    }

    const currentIndex = SkillLevels.findIndex((l) => l === currentLevel);

    for (const level of SkillLevels.slice(currentIndex + 1)) {
      starColors.push({ color: 'white', level });
    }
    return starColors;
  };

  return (
    <View className="flex-row justify-between">
      <View className="flex-row gap-2 items-center">
        {getCountryFlagReactSvG(countryCode, countryName)}
        <ThemedText className="text-base">{abilityName}</ThemedText>
      </View>
      <View className="flex-row gap-0 sm:gap-[2px]">
        {getStarColors(currentLevel).map(({ color, level }, index) => {
          return (
            <View
              key={`${abilityName}-${currentLevel}-${index}`}
              className={cn(
                'justify-center',
                level === 'Native' ? '' : 'items-center',
              )}
            >
              <MaterialCommunityIcons size={20} name="star" color={color} />
              <Text
                className={cn(
                  colorScheme === 'dark'
                    ? currentLevel === level
                      ? 'text-teal-100 '
                      : 'text-teal-400'
                    : 'text-teal-950',
                  'text-xs md:text-sm',
                )}
              >
                {level}
              </Text>
              {index > 0 && <View className="" />}
            </View>
          );
        })}
      </View>
    </View>
  );
}