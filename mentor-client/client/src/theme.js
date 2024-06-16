import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
  colors: {
    brand: {
      50: '#e6f9ff',
      100: '#b3e7ff',
      200: '#80d5ff',
      300: '#4dc3ff',
      400: '#1ab1ff',
      500: '#0097e6',
      600: '#0075b4',
      700: '#005382',
      800: '#003151',
      900: '#001020',
    },
  },
});

export default theme;
