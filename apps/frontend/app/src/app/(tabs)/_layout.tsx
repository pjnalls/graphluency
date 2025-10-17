import { Tabs } from 'expo-router';
import { Platform, useColorScheme } from 'react-native';

import { HapticTab } from '../../components/HapticTab';
import { IconSymbol } from '../../components/ui/IconSymbol';
import { MaterialIcons } from '@expo/vector-icons';
import TabBarBackground from '../../components/ui/TabBarBackground';
import { Colors } from '../../constants/Colors';
import BlurHeader from '../../components/ui/Header';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        header: ({ options }) => <BlurHeader title={options.title}/>,
        headerTransparent: true,
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: [
          Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
            },
            default: {
              position: 'absolute',
            },
            web: {
              borderColor: 
              colorScheme === 'light' ? '#52525b' : '#71717b',
            }
          })
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
            <MaterialIcons size={28} name='auto-graph' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name='person' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
