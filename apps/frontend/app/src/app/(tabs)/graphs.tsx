import { usePathname } from 'expo-router';
import { ScrollView } from 'react-native';

import { matchRoute } from '../../utils/tabs';

export default function GraphsScreen() {
  const path = usePathname();

  return (
    matchRoute(path, 'graphs') && (
      <ScrollView contentContainerClassName="flex-1 justify-center"></ScrollView>
    )
  );
}
