import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Colors } from '../../constants/Colors';
import { useColorScheme } from '../../hooks/useColorScheme';
import { cn } from '../../utils/twcn';

export default function BlurTabBarBackground() {
  const colorScheme = useColorScheme() ?? 'light';
  return (
    <BlurView
      intensity={colorScheme === 'light' ? 12 : 28}
      style={[
        StyleSheet.absoluteFill,
        { backgroundColor: Colors[colorScheme].tabBackground },
      ]}
      className={cn(
        'flex h-36 justify-end items-center pb-1',
        'backdrop-blur-md',
        colorScheme === 'light' ? 'border-zinc-600' : 'border-zinc-500',
        'border-t-[1px]',
      )}
    />
  );
}

export function useBottomTabOverflow() {
  const tabHeight = useBottomTabBarHeight();
  const { bottom } = useSafeAreaInsets();
  return tabHeight - bottom;
}
