import { PropsWithChildren } from 'react';
import { Image, View } from 'react-native';

import { cn } from '../../utils/twcn';

export default function Background({ children }: PropsWithChildren) {
  return (
    <View className="flex-1">
      <Image
        // Background Image
        source={require('../../assets/images/background.png')}
        resizeMode="cover"
        className={cn(
          'flex-1 absolute z-0 top-0'
        )}
        style={{ width: '100%', height: '100%' }}
      />
      {children}
    </View>
  );
}
