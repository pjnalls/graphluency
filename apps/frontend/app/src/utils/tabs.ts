import { Platform } from 'react-native';

export const matchRoute = (path: string, routeName?: string) => {
  if (Platform.OS === 'web') {
    if (routeName === 'index') {
      return path === '/';
    } else {
      return path === `/${routeName}`;
    }
  } else {
    return true;
  }
};
