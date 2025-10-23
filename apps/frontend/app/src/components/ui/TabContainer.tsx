import { usePathname } from 'expo-router';
import { PropsWithChildren } from 'react';
import {
  ScrollView,
  Platform,
  View,
  useWindowDimensions,
} from 'react-native';

import { useColorScheme } from '../../hooks/useColorScheme';
import { cn } from '../../utils/twcn';

import Card from './Card';

export default function TabContainer({ children }: PropsWithChildren) {
  const colorScheme = useColorScheme() ?? 'light';
  const { width, height } = useWindowDimensions();

  const isDesktop = width > 1024;
  const isWindowHeightTall = height > 420;
  const isProfileRoute = usePathname() === '/profile';

  return (
    <ScrollView
      contentContainerClassName={cn(
        'w-full', isProfileRoute && 'flex-1',
        Platform.OS === 'web' ? 'sm:pt-[114px] pt-[104px]' : 'pt-[136px]',
        'px-2 sm:px-4 max-w-4xl mx-auto',
      )}
    >
      <View
        className={cn(
          Platform.OS === 'web' ? 'pb-2 sm:pb-4' : 'pb-[94px]',
          isWindowHeightTall && isProfileRoute &&
            (isDesktop || Platform.OS !== 'web') &&
            'justify-center flex-1',
        )}
      >
        <Card
          variant={colorScheme}
          rowDirection="flex-col"
          padding="p-4"
          gap="gap-2"
        >
          {children}
        </Card>
      </View>
    </ScrollView>
  );
}
