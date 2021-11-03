import { styled } from '../stitches.config';
import type { ComponentProps } from '../stitches.config';

import { WithId } from '../utils/types';

export type InputElementProps = ComponentProps<typeof InputElement>;

const InputElement = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  zIndex: 2,
  top: 0,
  bottom: 0,
  width: '38px',
  pointerEvents: 'none',
  fontFamily: '$body',
  color: '$gray400',

  variants: {
    placement: {
      start: {
        insetInlineStart: 0,
      },
      end: {
        insetInlineEnd: 0,
      },
    },
  },
});

export const InputStartElement = styled(InputElement, {
  defaultVariants: { placement: 'start' },
});

export const InputEndElement = styled(InputElement, {
  defaultVariants: { placement: 'end' },
});

// This is used in `input-group.tsx`
(InputStartElement as WithId<typeof InputStartElement>).id =
  'InputStartElement';
(InputEndElement as WithId<typeof InputEndElement>).id = 'InputEndElement';
