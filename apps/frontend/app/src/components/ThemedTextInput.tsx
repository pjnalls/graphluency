import { View, TextInput, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { cn } from '../utils/twcn';

type ThemedTextInputProps = {
  label: string;
  onChangeText: (text: string) => void;
  value: string;
  isValid: boolean;
  errorMessage: string;
  placeholder?: string;
  className?: string;
  secureTextEntry?: boolean;
};

export default function ThemedTextInput({
  label,
  onChangeText,
  value,
  isValid,
  errorMessage,
  placeholder,
  className,
  secureTextEntry,
}: ThemedTextInputProps) {
  const { dark } = useTheme();
  const hasError = value.length > 0 && !isValid;
  const getErrorColor = (prop: 'text' | 'border') =>
    `${
      dark && hasError
        ? `${prop}-red-400`
        : !dark && hasError
        ? `${prop}-red-700`
        : dark
        ? `${prop}-gray-300`
        : `${prop}-gray-700`
    }`;

  return (
    <View className="w-full">
      <Text
        className={`mb-2 text-lg ${getErrorColor('text')}`}
        style={{ fontSize: 20 }}
      >
        {label}
      </Text>
      <TextInput
        className={cn(
          className,
          'border-2 border-l-0 border-t-0',
          dark
            ? 'text-gray-300 bg-black'
            : 'text-gray-700 bg-white',
          'rounded-lg p-2 mb-4 px-3 h-10 w-full',
          dark && hasError
            ? 'border-red-400'
            : !dark && hasError
            ? 'border-red-700'
            : dark && !hasError
            ? 'border-gray-500'
            : 'border-gray-400'
        )}
        maxLength={256}
        onChangeText={onChangeText}
        autoCapitalize="none"
        value={value}
        placeholder={placeholder}
        placeholderTextColor={'#999'}
        style={{
          fontSize: 20,
          height: 40,
        }}
        secureTextEntry={secureTextEntry}
      />
      <View className="flex flex-row h-8 w-full mt-[-10px]">
        {hasError && (
          <Text className={`${dark ? 'text-red-400' : 'text-red-700'} text-lg`}>
            {errorMessage}
          </Text>
        )}
      </View>
    </View>
  );
}
