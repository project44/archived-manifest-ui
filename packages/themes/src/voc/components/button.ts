import { StyleFunctionProps } from '@chakra-ui/theme-tools';

export default {
  baseStyle: {
    fontWeight: 'bold',
  },
  sizes: {
    xl: {
      h: '56px',
      fontSize: 'lg',
      px: '32px',
    },
  },
  variants: {
    'with-shadow': {
      bg: 'red.400',
      boxShadow: '0 0 2px 2px #efdfde',
    },
    solid: (props: StyleFunctionProps) => ({
      bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
    }),
  },
};
