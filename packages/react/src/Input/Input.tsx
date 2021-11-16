import { styled } from '../stitches.config';
import type { ComponentProps, VariantProps } from '../stitches.config';

import { WithId } from '../utils/types';

export type InputProps = ComponentProps<typeof Input>;
export type InputVariants = VariantProps<typeof Input>;

export const Input = styled('input', {
  // Reset
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  fontFamily: '$body',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  backgroundColor: '$loContrast',
  boxShadow: 'inset 0 0 0 1px $colors$neutral30',
  color: '$hiContrast',
  transitionDuration: '$fast',
  transitionProperty: '$common',
  transitionTimingFunction: '$ease',
  zIndex: 1,
  _hover: {
    boxShadow: 'inset 0 0 0 2px $$border',
  },
  _focus: {
    boxShadow: 'inset 0 0 0 2px $$border, 0 0 0 4px $$outline',
  },
  _disabled: {
    pointerEvents: 'none',
    backgroundColor: '$neutral10',
    color: '$neutral70',
    cursor: 'not-allowed',
    '&::placeholder': {
      color: '$neutral60',
    },
  },
  _placeholder: {
    color: '$neutral40',
  },
  _readOnly: {
    backgroundColor: '$neutral10',
    _focus: {
      boxShadow: 'inset 0px 0px 0px 1px $colors$neutral60',
    },
  },
  variants: {
    size: {
      small: {
        borderRadius: '$small',
        fontSize: '$3',
        height: '30px',
        px: '$2',
      },
      medium: {
        borderRadius: '$small',
        fontSize: '$4',
        height: '38px',
        px: '$3',
      },
      large: {
        borderRadius: '$small',
        fontSize: '$4',
        height: '44px',
        px: '$3',
      },
    },
    variant: {
      normal: {
        $$border: '$colors$blue50',
        $$outline: '$colors$blue20',
      },
      success: {
        $$border: '$colors$green50',
        $$outline: '$colors$green20',
      },
      warning: {
        $$border: '$colors$orange50',
        $$outline: '$colors$orange20',
      },
      danger: {
        $$border: '$colors$red50',
        $$outline: '$colors$red20',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'normal',
  },
});

// This is used in `input-group.tsx`
(Input as WithId<typeof Input>).id = 'Input';
