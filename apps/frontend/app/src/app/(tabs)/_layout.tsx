import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

import { Platform, useColorScheme } from 'react-native';

import { HapticTab } from '../../components/HapticTab';
import BlurHeader from '../../components/ui/Header';
import { IconSymbol } from '../../components/ui/IconSymbol';
import TabBarBackground from '../../components/ui/TabBarBackground';
import { Colors } from '../../constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        header: ({ options, route }) => (
          <BlurHeader title={options.title} routeName={route.name} />
        ),
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: [
          Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
              borderWidth: 1,
            },
            default: {
              position: 'absolute',
            },
            web: {
              borderColor: colorScheme === 'light' ? '#18181b' : '#71717b',
            },
          }),
        ],
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="graphs"
        options={{
          title: 'Fluency Graphs',
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="auto-graph" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="person" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
