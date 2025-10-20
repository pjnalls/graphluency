import { usePathname } from 'expo-router';
import { ScrollView, View } from 'react-native';

import { useColorScheme } from '../../hooks/useColorScheme';
import { useAppSelector } from '../../redux/hooks';
import { matchRoute } from '../../utils/tabs';
import { cn } from '../../utils/twcn';

import Login from '../../components/feat/Login';
import TabContainer from '../../components/ui/TabContainer';
import { BriefProfileProps } from '../../types';
import BriefProfile from '../../components/feat/BriefProfile';

const briefProfileProps: BriefProfileProps = {
  learning: [
    { countryCode: 'TW', countryName: 'Taiwan' },
    { countryCode: 'ES', countryName: 'Spain' },
    { countryCode: 'JP', countryName: 'Japan' },
    { countryCode: 'KR', countryName: 'Korea (ROK)' },
  ],
};

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const path = usePathname();
  const isAuthenticated = useAppSelector(
    (selector) => selector.mockAuthenticator.isAuthenticated,
  );

  return (
    matchRoute(path, 'index') &&
    (!isAuthenticated ? (
      <ScrollView contentContainerClassName="flex-1">
        <Login />
      </ScrollView>
    ) : (
      <TabContainer>
        <View className="gap-4 w-full flex-1">
          {new Array(10).fill(0).map((_, index) => (
            <View key={`brief-profile-${index}`} className="flex-1">
              {index > 0 && (
                <View
                  className={cn(
                    'border-0 h-[1px] bg-zinc-400 w-full mb-4',
                    colorScheme === 'light'
                      ? 'bg-zinc-700 brightness-150'
                      : 'bg-zinc-300',
                    '',
                  )}
                />
              )}
              <BriefProfile {...briefProfileProps} />
            </View>
          ))}
        </View>
      </TabContainer>
    ))
  );
}
