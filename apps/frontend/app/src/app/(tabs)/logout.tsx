import { usePathname } from 'expo-router';
import {
  View,
} from 'react-native';

import { matchRoute } from '../../utils/tabs';

export default function LogoutScreen() {
  const path = usePathname();

  return matchRoute(path, 'logout') && (
    <View />
  );
}