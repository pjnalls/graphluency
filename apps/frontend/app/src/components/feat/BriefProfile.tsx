import { useState } from 'react';
import { View, ActivityIndicator, Image, Text } from 'react-native';

import { abilities } from '../../data/abilities';
import { useColorScheme } from '../../hooks/useColorScheme';
import { BriefProfileProps } from '../../types';
import { getCountryFlagReactSvG } from '../../utils/country';
import { cn } from '../../utils/twcn';

import { ThemedText } from '../ThemedText';
import LanguageAbility from './LanguageAbility';

export default function BriefProfile({ learning }: BriefProfileProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const [profilePicLoaded, setProfilePicLoaded] = useState(false);

  return (
    <View className="flex-row w-full gap-4 flex-1">
      <View className="sm:w-48 sm:h-48 w-40 h-40">
        {!profilePicLoaded && (
          <ActivityIndicator
            size="large"
            color={colorScheme === 'light' ? '#42f' : '#6df'}
            className="absolute sm:w-48 sm:h-48 w-40 h-40"
          />
        )}
        <Image
          source={require('../../assets/images/profile/preston.webp')}
          className={cn(
            'flex-1 w-full h-full rounded-sm',
            profilePicLoaded ? 'opacity-100' : 'opacity-0',
          )}
          style={{ width: '100%', height: '100%' }}
          onLoad={() => {
            setProfilePicLoaded(true);
          }}
        />
      </View>
      <View
        className={cn(
          'sm:w-[calc(100%-13rem)] w-[calc(100%-11rem)]',
          'gap-[2px] sm:gap-2',
        )}
      >
        <ThemedText className="text-2xl sm:text-4xl font-semibold">
          Preston
        </ThemedText>
        <View className="gap-[3px] md:gap-0">
          <View className="flex-row gap-2 items-center">
            <Text
              className={cn(
                colorScheme === 'dark' ? 'text-teal-400' : 'text-teal-700',
                'font-semibold',
                '',
              )}
            >
              Learning
            </Text>
            {learning.map(({ countryCode, countryName }, index) => (
              <Text
                key={`brief-profile-learning-country-flags-${index}--${countryCode}`}
              >
                {getCountryFlagReactSvG(countryCode, countryName)},
              </Text>
            ))}
          </View>
          <View className="flex-row gap-2 items-center">
            <Text
              className={cn(
                colorScheme === 'dark' ? 'text-teal-400' : 'text-teal-700',
                'font-semibold',
                '',
              )}
            >
              Location
            </Text>
            <Text
              className={cn(
                colorScheme === 'dark' ? 'text-zinc-300' : 'text-zinc-800',
                'text-base',
              )}
            >
              United States of America
            </Text>
          </View>
          <View className="gap-0 md:gap-1 w-full">
            {abilities.slice(0, 2).map((ability, index) => (
              <LanguageAbility
                {...ability}
                key={`language-abilities-${index}--${ability.abilityName}`}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
