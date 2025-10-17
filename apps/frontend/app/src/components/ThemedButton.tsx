import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

type ThemedButtonProps = TouchableOpacityProps & {
  onPress: () => void;
  title: string;
  className?: string;
  disabled?: boolean;
};

export default function ThemedButton({
  title,
  onPress,
  className,
  disabled,
}: ThemedButtonProps) {
  const { dark } = useTheme();
  const colorSchemeStyle = dark ? { color: '#fff' } : { color: '#000' };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-blue-500 rounded-md p-2 items-center justify-center ${className} ${disabled ? 'opacity-50' : ''}`}
      style={{ backgroundColor: dark ? '#014a7b' : '#61dafb' }}
      disabled={disabled}
    >
      <Text style={colorSchemeStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
