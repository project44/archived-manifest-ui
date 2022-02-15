import { Clear } from '@manifest-ui/icons';
import { styled } from '@manifest-ui/styled';

export interface StyledTagOptions {
  /**
   * The size of the tag.
   *
   * @default 'medium'
   */
  size?: 'large' | 'medium' | 'small';
  /**
   * The tag variant.
   *
   * @default 'outlined'
   */
  variant?: 'filled' | 'outlined';
}

const themeKey = 'tag';

export const StyledTag = styled('div', {
  themeKey,
})<StyledTagOptions>(
  {
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 'solid',
    borderColor: 'transparent',
    borderRadius: 'full',
    borderWidth: 'small',
    boxSizing: 'border-box',
    color: 'emphasis.primary',
    cursor: 'default',
    display: 'inline-flex',
    fontFamily: 'body',
    fontWeight: 'normal',
    justifyContent: 'center',
    letterSpacing: 'normal',
    outline: 0,
    p: 0,
    textDecoration: 'none',
    transitionDuration: 'base',
    transitionProperty: 'colors',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',

    '& > .manifestui-tag-icon': {
      '& ~.manifestui-tag-text': {
        pl: 1,
      },
    },

    '&[data-disabled]': {
      opacity: 0.32,
      pointerEvents: 'none',
    },

    '&[data-dismissible]': {
      '& > .manifestui-tag-text': {
        pr: 1,
      },
    },

    '&[data-clickable]': {
      cursor: 'pointer',
      userSelect: 'none',
    },
  },
  ({ variant }) => ({
    ...(variant === 'outlined' && {
      borderColor: 'neutral.200',

      '&[data-clickable]': {
        '&[data-active]': {
          backgroundColor: 'neutral.200',
          borderColor: 'neutral.400',
        },

        '&:hover': {
          backgroundColor: 'neutral.50',
          borderColor: 'neutral.400',
        },

        '&:focus': {
          backgroundColor: 'neutral.100',
          borderColor: 'neutral.400',
        },
      },
    }),

    ...(variant === 'filled' && {
      backgroundColor: 'neutral.100',

      '&[data-clickable]': {
        '&[data-active]': {
          backgroundColor: 'neutral.400',
        },

        '&:hover': {
          backgroundColor: 'neutral.200',
        },

        '&:focus': {
          backgroundColor: 'neutral.300',
        },
      },
    }),
  }),
  ({ size }) => ({
    ...(size === 'large' && {
      h: 28,

      '& > .manifestui-tag-icon': {
        ml: 2,
      },

      '& > .manifestui-tag-text': {
        fontSize: 'small',
        lineHeight: 'medium',
      },

      '& > .manifestui-tag-dismiss, & > .manifestui-tag-icon': {
        boxSize: '18px',
      },
    }),

    ...(size === 'medium' && {
      h: 24,

      '& > .manifestui-tag-icon': {
        ml: 2,
      },

      '& > .manifestui-tag-text': {
        fontSize: 'x-small',
        lineHeight: 'small',
      },

      '& > .manifestui-tag-dismiss, & > .manifestui-tag-icon': {
        boxSize: '18px',
      },
    }),

    ...(size === 'small' && {
      h: 20,

      '& > .manifestui-tag-icon': {
        ml: 1,
      },

      '& > .manifestui-tag-text': {
        fontSize: 'x-small',
        lineHeight: 'small',
      },

      '& > .manifestui-tag-dismiss, & > .manifestui-tag-icon': {
        boxSize: '16px',
      },
    }),
  }),
);

export const StyledDismissIcon = styled(Clear, {
  slot: 'dismiss',
  themeKey,
})({
  cursor: 'pointer',
  mr: '6px',
});

export const StyledTagText = styled('span', {
  slot: 'text',
  themeKey,
})({
  color: 'inherit',
  fontFamily: 'body',
  fontWeight: 'normal',
  letterSpacing: 'normal',
  px: 3,
});
