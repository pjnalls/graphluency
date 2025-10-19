import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Provider as AppStoreProvider } from 'react-redux';
import { ThemeProvider } from '@react-navigation/native';

import Background from '../components/ui/Background';
import { DarkTheme, DefaultTheme } from '../constants/Theme';
import { useColorScheme } from '../hooks/useColorScheme';
import { store } from '../redux/store';

import '../global.css';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Background>
        <AppStoreProvider store={store}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </AppStoreProvider>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      </Background>
    </ThemeProvider>
  );
}
