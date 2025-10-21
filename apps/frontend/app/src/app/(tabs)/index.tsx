import { usePathname } from 'expo-router';
import { ScrollView, View } from 'react-native';

import { useColorScheme } from '../../hooks/useColorScheme';
import { useAppSelector } from '../../redux/hooks';
import { matchRoute } from '../../utils/tabs';
import { cn } from '../../utils/twcn';

import Login from '../../components/feat/Login';
import TabContainer from '../../components/ui/TabContainer';
import ProfileShort from '../../components/feat/ProfileShort';
import { PROFILE_SHORTS_PROPS } from '../../data';

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const path = usePathname();
  const isAuthenticated = useAppSelector(
    (selector) => selector.mockAuthenticator.isAuthenticated,
  );

  return (
    matchRoute(path, 'index') &&
    (!isAuthenticated ? (
      <Login />
    ) : (
      <TabContainer>
        {PROFILE_SHORTS_PROPS.map((props, index) => (
          <View
            key={`brief-profile-${index}`}
            className="sm:gap-0 gap-4 w-full"
          >
            <View
              className={cn(
                'border-b-[1px] w-full sm:mt-2 sm:mb-4 mt-[6px] mb-[-1px]',
                colorScheme === 'light'
                  ? 'border-b-zinc-700 brightness-150'
                  : 'border-b-zinc-300',
                index > 0 ? '' : 'hidden',
              )}
            />
            <View className={cn(index <= 0 && 'mt-0 mb-[2px]')}>
              <ProfileShort {...props} />
            </View>
          </View>
        ))}
      </TabContainer>
    ))
  );
}
