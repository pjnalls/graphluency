import { usePathname } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '../ThemedText';

import { Colors } from '../../constants/Colors';
import { useColorScheme } from '../../hooks/useColorScheme.web';
import { cn } from '../../utils/twcn';

export default function Header({
  title,
  routeName,
}: {
  title?: string;
  routeName?: string;
}) {
  const colorScheme = useColorScheme() ?? 'light';
  const path = usePathname();

  const matchRoute = () => {
    if (routeName === 'index') {
      return path === '/';
    } else {
      return path === `/${routeName}`;
    }
  };

  return (
    <View className="flex-1">
      {matchRoute() && (
        <View
          className={cn(
            'h-36 justify-end items-center pb-2',
            'backdrop-blur-md',
            colorScheme === 'light'
              ? 'border-zinc-900 brightness-150'
              : 'border-zinc-500',
            'border-b-[1px]',
          )}
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: Colors[colorScheme].tabBackgroundWeb },
          ]}
        >
          <ThemedText className="text-xl">{title}</ThemedText>
        </View>
      )}
    </View>
  );
}
