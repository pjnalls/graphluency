/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#804eb0';
const tintColorDark = '#5aceff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#ffb0f020',
    backgroundWeb: '#ffb0f000',
    tint: tintColorLight,
    icon: '#283046',
    tabBackground: '#aafc',
    tabBackgroundWeb: '#ffefff8f',
    tabBackgroundOpaque: '#acf',
    tabIconDefault: '#283046',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#1023',
    backgroundWeb: '#1020',
    tint: tintColorDark,
    icon: '#9BA1a6',
    tabBackground: '#33e4',
    tabBackgroundWeb: '#33e4',
    tabBackgroundOpaque: '#24a',
    tabIconDefault: '#9BA1a6',
    tabIconSelected: tintColorDark,
  },
};