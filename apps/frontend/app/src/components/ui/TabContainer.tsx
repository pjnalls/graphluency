import { PropsWithChildren } from 'react';
import {
    Dimensions,
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

  const isTablet = width > 768;
  const isWindowHeightTall = height > 720;
  const isScreenHeightTall = Dimensions.get('screen').width > 420;

  return (
    <ScrollView
      contentContainerClassName={cn(
        'flex-1 w-full',
        Platform.OS === 'web' ? 'md:pt-28 pt-[108px]' : 'pt-16',
        'px-2 sm:px-4 max-w-3xl mx-auto',
      )}
    >
      <View
        className={cn(
          'pb-2 md:pb-4',
          isWindowHeightTall && isScreenHeightTall &&
            (isTablet || Platform.OS !== 'web') &&
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
