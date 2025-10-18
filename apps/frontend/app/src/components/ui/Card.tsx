import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

import { Colors } from '../../constants/Colors';
import { useColorScheme } from '../../hooks/useColorScheme.web';
import { cn } from '../../utils/twcn';
import { PropsWithChildren } from 'react';

export default function Card({
  children,
  rowDirection = 'flex-col',
  variant = 'dark',
  gap = 'gap-1',
}: PropsWithChildren<{
  rowDirection: 'flex-col' | 'flex-row';
  variant: 'light' | 'dark';
  gap?: 'gap-1' | 'gap-2' | 'gap-3' | 'gap-4';
}>) {
  const colorScheme = useColorScheme() ?? 'light';

  return variant === 'dark' ? (
    <View
      className={cn(
        'justify-end items-center',
        'backdrop-blur-md',
        colorScheme === 'light'
          ? 'border-zinc-900 brightness-150'
          : 'border-zinc-400 border-b-zinc-600 border-r-zinc-600',
        'border-[1px] w-full rounded-sm',
      )}
      style={[{ backgroundColor: Colors[colorScheme].tabBackgroundWeb }]}
    >
      <LinearGradient
        colors={['transparent', '#1029']}
        className="absolute h-full w-full z-0"
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
      />
      <View
        className={cn(
          'z-10 justify-center items-center py-2',
          rowDirection,
          gap,
        )}
      >
        {children}
      </View>
    </View>
  ) : (
    <View
      className={cn(
        'bg-[#efdfffbf] rounded-sm backdrop-blur-md',
        'gap-1',
        'border-[1px]',
        'border-white border-b-zinc-500 border-r-zinc-500',
      )}
    >
      <LinearGradient
        colors={['#fff', 'transparent']}
        className="absolute h-full w-full z-0"
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
      />
      <View
        className={cn(
          'z-10 justify-center items-center py-2',
          rowDirection,
          gap,
        )}
      >
        {children}
      </View>
    </View>
  );
}
