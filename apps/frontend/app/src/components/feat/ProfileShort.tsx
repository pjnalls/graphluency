import { useState } from 'react';
import { View, ActivityIndicator, Image, Text } from 'react-native';

import { useColorScheme } from '../../hooks/useColorScheme';
import { ProfileShortProps } from '../../types';
import { cn } from '../../utils/twcn';

import { ThemedText } from '../ThemedText';
import LanguageAbility from './LanguageAbility';
import LanguagesLearning from './LanguagesLearning';

export default function ProfileShort({
  abilities,
  learning,
  location,
  name,
  profilePic
}: ProfileShortProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const [profilePicLoaded, setProfilePicLoaded] = useState(false);

  return (
    <View className="flex-row w-full gap-4 items-center flex-1">
      <View className="md:w-56 md:h-56 sm:w-48 sm:h-48 w-16 h-36">
        {!profilePicLoaded && (
          <ActivityIndicator
            size="large"
            color={colorScheme === 'light' ? '#42f' : '#6df'}
            className="absolute w-full h-full"
          />
        )}
        <Image
          source={profilePic}
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
          'sm:w-[65%] md:w-[66%] w-[82.5%]',
          'gap-[2px] sm:gap-2 md:h-56 sm:h-48 h-36',
        )}
      >
        <ThemedText className="text-2xl sm:text-4xl font-semibold">
          {name}
        </ThemedText>
        <View className="gap-0 md:gap-1">
          <LanguagesLearning learning={learning} />
          <View className="flex-row gap-2 items-center flex-1">
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
              {location}
            </Text>
          </View>
          <View className="gap-0 md:gap-1 w-full">
            {abilities.map(
              (
                { abilityName, countryCode, countryName, currentLevel },
                index,
              ) => (
                <LanguageAbility
                  abilityName={abilityName}
                  countryCode={countryCode}
                  countryName={countryName}
                  currentLevel={currentLevel}
                  key={`language-abilities-${index}--${abilityName}`}
                />
              ),
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
