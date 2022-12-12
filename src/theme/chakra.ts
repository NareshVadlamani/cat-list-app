import { extendTheme, theme as defaultTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '376px',
  md: '769px',
  lg: '1025px',
  xl: '1201px',
});

const theme = extendTheme({
  breakpoints,
  components: {
    Drawer: {
      sizes: {
        ...defaultTheme.components.Drawer.sizes,
        '2xs': { dialog: { maxW: '2xs' } },
      },
    },
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  colors: {
    primary: {
      100: '#83A2BE',
      200: '#7497B6',
      300: '#658CAE',
      400: '#5781A5',
      500: '#4F7596',
      600: '#476987',
      700: '#3F5E78',
      800: '#375269',
      900: '#30465A',
    },
    lightGray: {
      100: '#F5F5F5',
      200: '#E3E3E3',
      300: '#D2D2D2',
      400: '#C0C0C0',
      500: '#AFAFAF',
      600: '#9D9D9D',
      700: '#8C8C8C',
      800: '#7A7A7A',
      900: '#696969',
    },
    grayLabel: {
      100: '#2d3748',
    },
  },
});

export default theme;
