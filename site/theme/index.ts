import { extendTheme } from '@chakra-ui/react';
import { vocTheme } from '@manifest-ui/themes';

const overrides = {
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'gray.100',
        fontFamily: '"Roboto",sans-serif,"Open Sans"',
      },
      a: {
        color: 'blue.600',
      },
    },
  },
};

export default extendTheme(overrides, vocTheme);
