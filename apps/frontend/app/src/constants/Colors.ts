/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#103ea0';
const tintColorDark = '#5aceff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff1',
    tint: tintColorLight,
    icon: '#687076',
    tabBackground: '#aaf6',
    tabBackgroundOpaque: '#acf',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#0002',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabBackground: '#33e4',
    tabBackgroundOpaque: '#24a',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};