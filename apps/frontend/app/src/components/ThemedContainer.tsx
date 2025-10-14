import { Platform, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { useTheme } from '@react-navigation/native';
import { ThemedView } from './ThemedView';
import { Media } from '../constants/Media';

export default function ThemedContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { dark } = useTheme();
  return (
    <View
      className={className}
      style={[{
        flex: 1,
        backgroundColor: dark
          ? Colors.dark.background
          : Colors.light.background
      }, Platform.OS === 'web' && {
        overflow: 'scroll'
      }]}
    >
      <ThemedView style={Media.styles.view}>
        {children}
      </ThemedView>
    </View>
  );
}
