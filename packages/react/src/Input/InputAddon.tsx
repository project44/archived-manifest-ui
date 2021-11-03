import { styled } from '../stitches.config';
import type { ComponentProps } from '../stitches.config';

import { WithId } from '../utils/types';

export type InputAddonProps = ComponentProps<typeof InputAddon>;

const InputAddon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flex: '0 0 auto',
  width: 'auto',
  fontFamily: '$body',
  fontSize: '$4',
  letterSpacing: '$normal',
  whiteSpace: 'nowrap',
  color: '$neutral600',

  border: '2px solid',
  borderColor: '$neutral300',
  backgroundColor: '$neutral100',
  borderRadius: '$sm',
  px: '$3',

  variants: {
    placement: {
      start: {
        marginInlineEnd: '-2px',
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        borderEndColor: 'transparent',
      },
      end: {
        marginInlineStart: '-2px',
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
        borderStartColor: 'transparent',
      },
    },
  },
});

export const InputStartAddon = styled(InputAddon, {
  defaultVariants: { placement: 'start' },
});

export const InputEndAddon = styled(InputAddon, {
  defaultVariants: { placement: 'end' },
});

// This is used in `input-group.tsx`
(InputStartAddon as WithId<typeof InputStartAddon>).id = 'InputStartAddon';
(InputEndAddon as WithId<typeof InputEndAddon>).id = 'InputEndAddon';
