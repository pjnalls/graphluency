import { View, Text } from 'react-native';
import { useColorScheme } from '../../hooks/useColorScheme';
import CountryFlag from '../ui/CountryFlag';
import { cn } from '../../utils/twcn';
import { LanguagesLearningProps } from '../../types/learning';

export default function LanguagesLearning({
  learning,
}: {
  learning: LanguagesLearningProps;
}) {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <View className="flex-row gap-2 items-center">
      <Text
        className={cn(
          colorScheme === 'dark' ? 'text-teal-400' : 'text-teal-700',
          'font-semibold',
          '',
        )}
      >
        Learning
      </Text>
      {learning?.map((l, index) => {
        if (!l) {
          return null;
        }

        return (
          <Text
            key={`brief-profile-learning-country-flags-${index}--${l.countryCode}`}
          >
            <CountryFlag {...l} />
          </Text>
        );
      })}
    </View>
  );
}
