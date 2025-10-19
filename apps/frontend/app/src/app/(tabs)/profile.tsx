import { Image } from 'expo-image';
import { usePathname } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  Platform,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

import { abilities } from '../../data/abilities';
import { useColorScheme } from '../../hooks/useColorScheme';
import { matchRoute } from '../../utils/tabs';
import { cn } from '../../utils/twcn';

import { ThemedText } from '../../components/ThemedText';
import Card from '../../components/ui/Card';
import LanguageAbility from '../../components/feat/LanguageAbility';

export default function ProfileScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const path = usePathname();
  const [profilePicLoaded, setProfilePicLoaded] = useState(false);
  const { width, height } = useWindowDimensions();

  const isTablet = width > 640;
  const isWindowHeightTall = height > 720;

  return (
    matchRoute(path, 'profile') && (
      <ScrollView
        contentContainerClassName={cn(
          'flex-1',
          Platform.OS === 'web' ? 'pt-28' : 'pt-16',
          'px-2 sm:px-4 max-w-3xl mx-auto',
        )}
      >
        <View
          className={cn(
            'pb-4 flex-1',
            isWindowHeightTall &&
              (isTablet || Platform.OS !== 'web') &&
              'justify-center',
          )}
        >
          <Card
            variant={colorScheme}
            rowDirection="flex-col"
            padding="p-4"
            gap="gap-2"
          >
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
                  source={require('../../assets/images/profile-pic.webp')}
                  className={cn(
                    'w-full h-full rounded-sm',
                    profilePicLoaded ? 'opacity-100' : 'opacity-0',
                  )}
                  onLoad={() => { setProfilePicLoaded(true) }}
                />
              </View>
              <View
                className={cn(
                  'md:w-[calc(100%-12rem)] w-[calc(100%-9rem)]',
                  'gap-[2px] sm:gap-1 m:h-40 h-32',
                )}
              >
                <ThemedText className="text-3xl sm:text-5xl">
                  Preston
                </ThemedText>
                <View className="gap-[3px] md:gap-0">
                  <View className="flex-row gap-1 items-center">
                    <Text
                      className={cn(
                        colorScheme === 'dark'
                          ? 'text-teal-400'
                          : 'text-teal-950',
                        'sm:text-base',
                      )}
                    >
                      Username
                    </Text>
                    <Text
                      className={cn(
                        colorScheme === 'dark'
                          ? 'text-zinc-300'
                          : 'text-zinc-800',
                        'text-base sm:text-lg',
                      )}
                    >
                      @pjnalls
                    </Text>
                  </View>
                  <View className="flex-row gap-1 items-center">
                    <Text
                      className={cn(
                        colorScheme === 'dark'
                          ? 'text-teal-400'
                          : 'text-teal-950',
                        'sm:text-base',
                      )}
                    >
                      Job
                    </Text>
                    <Text
                      className={cn(
                        colorScheme === 'dark'
                          ? 'text-zinc-300'
                          : 'text-zinc-800',
                        'text-base sm:text-lg',
                      )}
                    >
                      Tutor, Engineer, and Postgraduate
                    </Text>
                  </View>
                  <View className="flex-row gap-1 items-center">
                    <Text
                      className={cn(
                        colorScheme === 'dark'
                          ? 'text-teal-400'
                          : 'text-teal-950',
                        'sm:text-base',
                      )}
                    >
                      Location
                    </Text>
                    <Text
                      className={cn(
                        colorScheme === 'dark'
                          ? 'text-zinc-300'
                          : 'text-zinc-800',
                        'text-base sm:text-lg',
                      )}
                    >
                      United States of America
                    </Text>
                  </View>
                  <View className="flex-row gap-1 items-center">
                    <Text
                      className={cn(
                        colorScheme === 'dark'
                          ? 'text-teal-400'
                          : 'text-teal-950',
                        'sm:text-base',
                      )}
                    >
                      Website
                    </Text>
                    <Text
                      className={cn(
                        colorScheme === 'dark'
                          ? 'text-zinc-300'
                          : 'text-zinc-800',
                        'text-base sm:text-lg',
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
                  colorScheme === 'dark' ? 'text-teal-200' : 'text-teal-900',
                  'w-full text-base',
                )}
              >
                Bio
              </Text>
              <ThemedText className="text-base sm:text-lg">
                I'm a polyglot and software engineer who loves to code and chat
                in a variety of programming and natural languages with friends
                from around the world.{' '}
                <Text
                  role="img"
                  aria-label="the Earth from shown from all sides"
                >
                  🌏🌍🌎
                </Text>
              </ThemedText>
              <Text
                className={cn(
                  colorScheme === 'dark' ? 'text-teal-300' : 'text-teal-900',
                  'w-full sm:text-base mt-4',
                )}
              >
                Language Abilities
              </Text>
            </View>

            <View className="flex-wrap w-full flex-row justify-between">
              {abilities.map((ability, index) => (
                <LanguageAbility
                  {...ability}
                  key={`language-abilities-${index}--${ability.abilityName}`}
                />
              ))}
            </View>
          </Card>
        </View>
      </ScrollView>
    )
  );
}
