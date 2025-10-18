import { StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

import { ThemedText } from '../ThemedText';

import { Colors } from '../../constants/Colors';
import { useColorScheme } from '../../hooks/useColorScheme';
import { cn } from '../../utils/twcn';

export default function BlurHeader({ title }: { title?: string }) {
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
        'border-b-[1px]',
      )}
    >
      <ThemedText className='text-2xl'>{title}</ThemedText>
    </BlurView>
  );
}
