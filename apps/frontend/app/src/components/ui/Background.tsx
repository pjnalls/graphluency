import { LinearGradient } from 'expo-linear-gradient';
import { PropsWithChildren, useEffect } from 'react';
import { Image, Platform, View } from 'react-native';

import { cn } from '../../utils/twcn';

export default function Background({ children }: PropsWithChildren) {
  useEffect(() => {
    console.log();
  }, []);
  return (
    <View className="flex-1">
      <Image
        // Background Image
        source={require('../../assets/images/background.png')}
        resizeMode="cover"
        className={cn('flex-1 absolute z-0 top-0')}
        style={{ width: '100%', height: '100%' }}
      />
      <LinearGradient
        // Background Linear Gradient
        colors={[
          Platform.OS === 'web' ? 'transparent' : 'rgba(255,255,255,0)',
          Platform.OS === 'web' ? 'rgba(0,0,128,0.9)' : 'rgba(0,0,128,0.7)',
        ]}
        start={{ x: 0, y: 0 }} // Top-left
        end={{ x: 1, y: 0.5 }} // Bottom-right
        className="flex-1 absolute z-20 top-0"
        style={{ width: '100%', height: '100%' }}
      >
        {children}
      </LinearGradient>
    </View>
  );
}
