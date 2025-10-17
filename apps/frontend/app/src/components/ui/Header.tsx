import { View } from 'react-native';
import { ThemedText } from '../ThemedText';

import { Colors } from '../../constants/Colors';
import { useColorScheme } from '../../hooks/useColorScheme.web';
import { cn } from '../../utils/twcn';

export default function BlurHeader({ title }: { title?: string }) {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <View
      className={cn(
        'h-36 justify-end items-center pb-2',
        'backdrop-blur-md',
        colorScheme === 'light' ? 'border-zinc-600 brightness-150' : 'border-zinc-500',
        'border-b-[1px]',
      )}
      style={{
        backgroundColor: Colors[colorScheme].tabBackground,
      }}
    >
      <ThemedText className="text-xl">{title}</ThemedText>
    </View>
  );
}
