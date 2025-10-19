import { ImageBackground } from 'expo-image';
import { PropsWithChildren } from 'react';
import { View } from 'react-native';

import { cn } from '../../utils/twcn';

export default function Background({ children }: PropsWithChildren) {
  return (
    <View className="flex-1">
      <ImageBackground
        // Background Image
        source={require('../../assets/images/background.webp')}
        className={cn('flex-1 absolute z-0 top-0 object-cover')}
        style={{ width: '100%', height: '100%' }}
      >
      {children}
      </ImageBackground>
    </View>
  );
}
