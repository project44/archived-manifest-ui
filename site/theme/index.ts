import { extendTheme, ChakraTheme } from '@manifest-ui/react';
import { voc } from '@manifest-ui/themes';

const overrides: Partial<ChakraTheme> = {
  styles: {
    global: {
      'html, body': {
        height: '100%',
      },
      '#__next': {
        height: '100%',
      },
    },
  },
};

export default extendTheme(overrides, voc);
