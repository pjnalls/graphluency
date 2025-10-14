import {
    DefaultTheme as DefaultAppTheme,
    DarkTheme as DarkAppTheme,
  } from '@react-navigation/native';
  import { Colors } from './Colors';
  
  export const DefaultTheme: typeof DefaultAppTheme = {
    ...DefaultAppTheme,
    colors: {
      ...DefaultAppTheme.colors,
      background: Colors.light.background,
    },
  };
  
  export const DarkTheme: typeof DarkAppTheme = {
    ...DarkAppTheme,
    colors: {
      ...DarkAppTheme.colors,
      background: Colors.dark.background,
    },
  };
  