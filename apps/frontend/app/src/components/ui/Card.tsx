import { LinearGradient } from 'expo-linear-gradient';
import { Platform, View } from 'react-native';

import { Colors } from '../../constants/Colors';
import { useColorScheme } from '../../hooks/useColorScheme.web';
import { cn } from '../../utils/twcn';
import { PropsWithChildren } from 'react';

export default function Card({
  children,
  rowDirection = 'flex-col',
  variant = 'dark',
  padding = 'p-2',
  gap = 'gap-1',
}: PropsWithChildren<{
  rowDirection: 'flex-col' | 'flex-row';
  variant: 'light' | 'dark';
  padding?: 'p-2' | 'p-3' | 'p-4';
  gap?: 'gap-1' | 'gap-2' | 'gap-3' | 'gap-4';
}>) {
  const colorScheme = useColorScheme() ?? 'light';

  return variant === 'dark' ? (
    <View
      className={cn(
        'justify-end items-center',
        'backdrop-blur-md',
        colorScheme === 'light'
          ? 'border-zinc-400 border-b-zinc-600 border-r-zinc-600 brightness-150'
          : 'border-zinc-400 border-b-zinc-600 border-r-zinc-600',
        'border-[1px] w-full rounded-sm',
      )}
      style={[{ backgroundColor: Colors['dark'].tabBackgroundWeb }]}
    >
      <LinearGradient
        colors={['transparent', '#1029']}
        className="absolute h-full w-full z-0"
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
      />
      <View
        className={cn(
          'z-10 justify-center items-center w-full',
          rowDirection,
          padding,
          gap,
        )}
      >
        {children}
      </View>
    </View>
  ) : (
    <View
      className={cn(
        'rounded-sm backdrop-blur-md',
        'gap-1',
        'border-[1px] w-full',
        'border-white border-b-zinc-500 border-r-zinc-500',
      )}
      style={[
        {
          backgroundColor:
            Platform.OS === 'web'
              ? Colors['light'].tabBackgroundWeb
              : Colors['light'].tabBackground,
        },
      ]}
    >
      <LinearGradient
        colors={['#fffc', 'transparent']}
        className="absolute h-full w-full z-0"
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
      />
      <View
        className={cn(
          'z-10 justify-center items-center w-full',
          rowDirection,
          padding,
          gap,
        )}
      >
        {children}
      </View>
    </View>
  );
}
