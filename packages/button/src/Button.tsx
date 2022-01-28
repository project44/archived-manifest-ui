import * as React from 'react';
import { ComponentProps, shouldForwardProp, styled } from '@manifest-ui/styled';
import { Typography } from '@manifest-ui/typography';

const props = new Set(['colorTheme']);

export interface ButtonOptions {
  /**
   * The button color theme.
   *
   * @default 'gradient'
   */
  colorTheme?: 'brand' | 'danger' | 'gradient';
  /**
   * Icon added after the button text.
   */
  endIcon?: React.ReactElement;
  /**
   * Href value used if the button is rendered as an `<a>` tag.
   */
  href?: string | undefined;
  /**
   * Whether the button is active
   */
  isActive?: boolean;
  /**
   * Whether the button is disabled.
   */
  isDisabled?: boolean;
  /**
   * Rel value used if the button is rendered as an `<a>` tag.
   */
  rel?: string | undefined;
  /**
   * The size of the button.
   *
   * @default 'large'
   */
  size?: 'medium' | 'large';
  /**
   * Icon added before the button text.
   */
  startIcon?: React.ReactElement;
  /**
   * Target value used if the button is rendered as an `<a>` tag.
   */
  target?: string | undefined;
  /**
   * The button type.
   */
  type?: 'button' | 'reset' | 'submit';
  /**
   * The button variant.
   *
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined' | 'text' | 'tonal';
}

export type ButtonProps = ComponentProps<typeof StyledButton>;

const StyledButton = styled('button', {
  label: 'Button',
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && !props.has(prop),
  themeKey: 'button',
})<ButtonOptions>(({ colorTheme, variant }) => ({
  alignItems: 'center',
  appearance: 'none',
  border: 0,
  borderRadius: 'medium',
  boxSizing: 'border-box',
  cursor: 'pointer',
  display: 'inline-flex',
  margin: 0,
  outline: 0,
  px: 4,
  py: 2,
  transitionDuration: 'base',
  transitionProperty: 'colors',
  textDecoration: 'none',
  userSelect: 'none',

  '&[disabled], &[aria-disabled=true], &[data-disabled]': {
    opacity: 0.32,
    pointerEvents: 'none',
  },

  ...(variant === 'filled' && {
    color: 'neutral.50',

    ...(colorTheme === 'brand' && {
      backgroundColor: 'brand.500',

      '&:hover, &[data-hover]': {
        backgroundColor: 'brand.600',
      },

      '&:focus, &[data-focus]': {
        backgroundColor: 'brand.700',
      },

      '&:active, &[data-active]': {
        backgroundColor: 'brand.800',
      },
    }),

    ...(colorTheme === 'danger' && {
      backgroundColor: 'danger.500',

      '&:hover, &[data-hover]': {
        backgroundColor: 'danger.600',
      },

      '&:focus, &[data-focus]': {
        backgroundColor: 'danger.700',
      },

      '&:active, &[data-active]': {
        backgroundColor: 'danger.800',
      },
    }),

    ...(colorTheme === 'gradient' && {
      backgroundImage: 'gradient.0',

      '&:hover, &[data-hover]': {
        backgroundImage: 'gradient.20',
      },

      '&:focus, &[data-focus]': {
        backgroundImage: 'gradient.40',
      },

      '&:active, &[data-active]': {
        backgroundImage: 'gradient.60',
      },
    }),
  }),

  ...(variant === 'outlined' && {
    backgroundColor: 'transparent',
    borderColor: 'neutral.200',
    borderStyle: 'solid',
    borderWidth: 1,
    color: 'neutral.900',
    px: '0.938rem',
    py: '0.438rem',

    '&:hover, &[data-hover]': {
      backgroundColor: 'neutral.50',
      borderColor: 'neutral.400',
    },

    '&:focus, &[data-focus]': {
      backgroundColor: 'neutral.100',
      borderColor: 'neutral.400',
    },

    '&:active, &[data-active]': {
      backgroundColor: 'neutral.200',
      borderColor: 'neutral.400',
    },
  }),

  ...(variant === 'text' && {
    backgroundColor: 'transparent',
    color: 'neutral.900',

    '&:hover, &[data-hover]': {
      backgroundColor: 'neutral.50',
    },

    '&:focus, &[data-focus]': {
      backgroundColor: 'neutral.100',
    },

    '&:active, &[data-active]': {
      backgroundColor: 'neutral.200',
    },
  }),

  ...(variant === 'tonal' && {
    backgroundColor: 'danger.50',
    borderColor: 'danger.50',
    borderStyle: 'solid',
    borderWidth: 1,
    color: 'danger.500',
    px: '0.938rem',
    py: '0.438rem',

    '&:hover, &[data-hover]': {
      borderColor: 'danger.500',
    },

    '&:focus, &[data-focus]': {
      backgroundColor: 'danger.100',
      borderColor: 'danger.500',
    },

    '&:active, &[data-active]': {
      backgroundColor: 'danger.100',
      borderColor: 'danger.500',
    },
  }),
}));

const StyledEndIcon = styled('span')({
  alignSelf: 'center',
  display: 'inline-flex',
  flexShrink: 0,
  ml: 2,
});

const StyledStartIcon = styled('span')({
  alignSelf: 'center',
  display: 'inline-flex',
  flexShrink: 0,
  mr: 2,
});

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const {
      as = 'button',
      children: childrenProp,
      colorTheme = 'gradient',
      endIcon,
      href,
      isActive,
      isDisabled,
      rel,
      size = 'large',
      startIcon,
      target,
      tabIndex,
      type,
      variant = 'filled',
      ...other
    } = props;

    const ariaProps =
      as !== 'button'
        ? {
            'aria-disabled': !isDisabled ? undefined : isDisabled,
            href: as === 'a' && isDisabled ? undefined : href,
            rel: as === 'a' ? rel : undefined,
            role: 'button',
            tabIndex: isDisabled ? undefined : 0,
            target: as === 'a' ? target : undefined,
          }
        : {
            disabled: isDisabled,
            tabIndex: isDisabled ? -1 : tabIndex,
            type: type ?? 'button',
          };

    let children = childrenProp;

    if (typeof children === 'string') {
      children = (
        <Typography className="manifest-ui-button__text" size={size} variant="button">
          {children}
        </Typography>
      );
    }

    return (
      <StyledButton
        as={as}
        className="manifest-ui-button"
        colorTheme={colorTheme}
        data-active={isActive ? '' : null}
        data-disabled={isDisabled ? '' : null}
        ref={ref}
        variant={variant}
        {...ariaProps}
        {...other}
      >
        {startIcon && (
          <StyledStartIcon className="manifest-ui-button__start-icon">{startIcon}</StyledStartIcon>
        )}
        {children}
        {endIcon && (
          <StyledEndIcon className="manifest-ui-button__end-icon">{endIcon}</StyledEndIcon>
        )}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
