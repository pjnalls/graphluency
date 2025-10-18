import { StyleSheet, View } from 'react-native';

import { Colors } from '../../constants/Colors';
import { useColorScheme } from '../../hooks/useColorScheme.web';
import { cn } from '../../utils/twcn';

export default function BlurTabBarBackground() {
  const colorScheme = useColorScheme() ?? 'light';
  return (
    <View
      className={cn(
        'backdrop-blur-sm',
        colorScheme === 'light' ? 'bg-zinc-600 brightness-150' : 'bg-zinc-500',
        'border-t-[0px]',
      )}
      style={[
        StyleSheet.absoluteFill,
        { backgroundColor: Colors[colorScheme].tabBackgroundWeb },
      ]}
    />
  );
}

export function useBottomTabOverflow() {
  return 0;
}
