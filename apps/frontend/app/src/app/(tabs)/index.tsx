import { usePathname } from 'expo-router';
import { ScrollView, View } from 'react-native';

import { useAppSelector } from '../../redux/hooks';
import { matchRoute } from '../../utils/tabs';
import Login from '../../components/feat/Login';

export default function HomeScreen() {
  const path = usePathname();
  const isAuthenticated = useAppSelector(
    (selector) => selector.mockAuthenticator.isAuthenticated,
  );

  return (
    matchRoute(path, 'index') && (
      <ScrollView contentContainerClassName="flex-1">
        {isAuthenticated ? <View /> : <Login />}
      </ScrollView>
    )
  );
}
