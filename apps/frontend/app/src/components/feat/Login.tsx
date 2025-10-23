import { LinearGradient } from 'expo-linear-gradient';
import { router, usePathname } from 'expo-router';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { View, TouchableOpacity, useWindowDimensions, Text } from 'react-native';

import { Colors } from '../../constants/Colors';
import { useColorScheme } from '../../hooks/useColorScheme';
import { useAppDispatch } from '../../redux/hooks';
import { mockAuthenticator } from '../../redux/mock-authenticator';

import { cn } from '../../utils/twcn';
import { ThemedText } from '../ThemedText';
import Card from '../ui/Card';
import { useEffect } from 'react';

export default function Login() {
  const colorScheme = useColorScheme() ?? 'light';
  const { width } = useWindowDimensions();
  const path = usePathname();
  const isMobile = width < 768;
  const isDesktop = width < 1000;

  const dispatch = useAppDispatch();

  const renderAppIcon = () => {
    const iconColor = Colors[colorScheme].text;

    if (isMobile) {
      return <MaterialIcons size={96} color={iconColor} name="auto-graph" />;
    } else if (isDesktop) {
      return <MaterialIcons size={200} color={iconColor} name="auto-graph" />;
    } else {
      return <MaterialIcons size={280} color={iconColor} name="auto-graph" />;
    }
  };

  useEffect(() => {
    if (path !== '/') {
      router.replace('/');
    }
  }, [path]);

  return (
    <View className="flex-1">
      <LinearGradient
        colors={
          colorScheme === 'light' ? ['#fef', '#eff8'] : ['#003d', 'transparent']
        }
        className={cn('absolute z-0')}
        style={{ width: '100%', height: '100%' }}
      >
        <View
          className={cn(
            'md:w-full max-w-xl md:max-w-5xl',
            'sm:px-12 px-8 py-8 mx-auto md:flex-row',
            'justify-center items-center flex-1 z-10',
          )}
        >
          <View className="w-full md:w-2/5">{renderAppIcon()}</View>
          <View className="my-8 w-full md:w-3/5">
            <ThemedText
              className={'text-white sm:text-6xl text-5xl pb-4 text-center sm:text-left'}
            >
              Graphfluency
            </ThemedText>
            <View
              className={cn(
                'border-0 h-[1px] bg-zinc-400 w-80 md:w-full',
                colorScheme === 'light'
                  ? 'bg-zinc-700 brightness-150'
                  : 'bg-zinc-300',
                'mb-6',
              )}
            />
            <ThemedText className="sm:text-4xl text-2xl w-full mb-8">
              Start connecting today.
            </ThemedText>
            <View className="gap-4 w-80 mb-16">
              <TouchableOpacity>
                <Card variant="light" rowDirection="flex-row">
                  <MaterialCommunityIcons
                    size={20}
                    color="navy"
                    name="google"
                  />
                  <ThemedText className="text-base" style={{ color: 'navy' }}>
                    Sign up with Google
                  </ThemedText>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity>
                <Card variant="light" rowDirection="flex-row">
                  <MaterialIcons size={24} color="navy" name="apple" />
                  <ThemedText className="text-base" style={{ color: 'navy' }}>
                    Sign up with Apple
                  </ThemedText>
                </Card>
              </TouchableOpacity>
              <View className="flex-row justify-center items-center my-[-8px]">
                <View
                  className={cn(
                    'border-0 h-[1px] bg-zinc-400 w-full',
                    colorScheme === 'light'
                      ? 'bg-zinc-700 brightness-150'
                      : 'bg-zinc-300',
                    'w-2/5',
                  )}
                />
                <View className="w-1/5 h-full">
                  <ThemedText className="text-center text-lg">
                    OR
                  </ThemedText>
                </View>
                <View
                  className={cn(
                    'border-0 h-[1px] bg-zinc-400 w-full',
                    colorScheme === 'light'
                      ? 'bg-zinc-700 brightness-150'
                      : 'bg-zinc-300',
                    'w-2/5',
                  )}
                />
              </View>
              <TouchableOpacity>
                <Card variant="light" rowDirection="flex-row">
                  <ThemedText
                    className="text-base font-bold"
                    style={{ color: 'navy' }}
                  >
                    Create account
                  </ThemedText>
                </Card>
              </TouchableOpacity>
            </View>
            <View className="gap-4 w-80">
              <ThemedText className="text-lg font-semibold">
                Already have an account?
              </ThemedText>
              <TouchableOpacity
                className={cn(
                  'flex-row',
                  'justify-center items-center rounded-3xl py-2 gap-1',
                )}
                onPress={() => {
                  dispatch(mockAuthenticator({ isAuthenticated: true }));
                }}
              >
                <Card variant="dark" rowDirection="flex-row">
                  <Text className="text-base text-white">Sign in</Text>
                </Card>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
