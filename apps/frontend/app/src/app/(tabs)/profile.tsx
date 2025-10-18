import { usePathname } from 'expo-router';
import {
  ScrollView,
} from 'react-native';

import { matchRoute } from '../../utils/tabs';

export default function ProfileScreen() {
  const path = usePathname();

  return matchRoute(path, 'profile') && (
    <ScrollView contentContainerClassName="flex-1">
    </ScrollView>
  );
}
