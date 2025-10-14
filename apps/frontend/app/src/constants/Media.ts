import { StyleSheet } from 'react-native';

export const Media: {
  className: string;
  styles: ReturnType<typeof StyleSheet.create>;
} = {
  // Tailwind max width of "3xl" is 768px
  className: 'max-w-3xl mx-auto w-full',
  styles: StyleSheet.create({
    view: {
      maxWidth: 768,
      marginHorizontal: 'auto',
      width: '100%',
    },
  }),
};
