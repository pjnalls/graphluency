import { Image } from 'expo-image';
import { usePathname } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import { abilities } from '../../data/abilities';
import { useColorScheme } from '../../hooks/useColorScheme';
import { matchRoute } from '../../utils/tabs';
import { cn } from '../../utils/twcn';

import { ThemedText } from '../../components/ThemedText';
import LanguageAbility from '../../components/feat/LanguageAbility';
import TabContainer from '../../components/ui/TabContainer';

export default function ProfileScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const path = usePathname();
  const [profilePicLoaded, setProfilePicLoaded] = useState(false);

  return (
    matchRoute(path, 'profile') && (
      <TabContainer>
        <View className="flex-row w-full gap-4">
          <View className="sm:w-44 sm:h-44 w-36 h-36">
            {!profilePicLoaded && (
              <ActivityIndicator
                size="large"
                color={colorScheme === 'light' ? '#42f' : '#6df'}
                className="absolute sm:w-44 sm:h-44 w-36 h-36"
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
              'md:w-[calc(100%-12rem)] w-[calc(100%-9rem)]',
              'gap-[2px] sm:gap-1 m:h-40 h-32',
            )}
          >
            <ThemedText className="text-2xl sm:text-4xl font-semibold">
              Preston
            </ThemedText>
            <View className="gap-[3px] md:gap-0">
              <View className="flex-row gap-1 items-center">
                <Text
                  className={cn(
                    colorScheme === 'dark' ? 'text-teal-400' : 'text-teal-700',
                    'font-semibold',
                    '',
                  )}
                >
                  Username
                </Text>
                <Text
                  className={cn(
                    colorScheme === 'dark' ? 'text-zinc-300' : 'text-zinc-800',
                    'text-base',
                  )}
                >
                  @pjnalls
                </Text>
              </View>
              <View className="flex-row gap-1 items-center">
                <Text
                  className={cn(
                    colorScheme === 'dark' ? 'text-teal-400' : 'text-teal-700',
                    'font-semibold',
                    '',
                  )}
                >
                  Job
                </Text>
                <Text
                  className={cn(
                    colorScheme === 'dark' ? 'text-zinc-300' : 'text-zinc-800',
                    'text-base',
                  )}
                >
                  Tutor, Engineer, and Postgraduate
                </Text>
              </View>
              <View className="flex-row gap-1 items-center">
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
              <View className="flex-row gap-1 items-center">
                <Text
                  className={cn(
                    colorScheme === 'dark' ? 'text-teal-400' : 'text-teal-700',
                    'font-semibold',
                    '',
                  )}
                >
                  Website
                </Text>
                <Text
                  className={cn(
                    colorScheme === 'dark' ? 'text-zinc-300' : 'text-zinc-800',
                    'text-base',
                  )}
                >
                  pjnalls.dev
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text
            className={cn(
              colorScheme === 'dark' ? 'text-teal-200' : 'text-teal-700',
              'font-semibold',
              'w-full',
            )}
          >
            Bio
          </Text>
          <ThemedText className="text-base">
            I'm a polyglot and software engineer who loves to code and chat in a
            variety of programming and natural languages with friends from
            around the world.{' '}
            <Text role="img" aria-label="the Earth from shown from all sides">
              🌏🌍🌎
            </Text>
          </ThemedText>
          <Text
            className={cn(
              colorScheme === 'dark' ? 'text-teal-300' : 'text-teal-700',
              'font-semibold',
              'w-full  mt-4',
            )}
          >
            Language Abilities
          </Text>
        </View>

        <View className="flex-wrap w-full flex-row justify-between gap-1">
          {abilities.map((ability, index) => (
            <View
              className="md:w-[49%] w-full"
              key={`language-abilities-${index}--${ability.abilityName}`}
            >
              <LanguageAbility {...ability} />
            </View>
          ))}
        </View>
      </TabContainer>
    )
  );
}
