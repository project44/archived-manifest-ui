import * as React from 'react';
import { ComponentProps, styled } from '@manifest-ui/styled';
import { Typography } from '@manifest-ui/typography';

export interface ButtonProps extends ComponentProps<typeof StyledButton> {
  /**
   * Href value used if the button is rendered as an `<a>` tag.
   */
  href?: string | undefined;
  /**
   * Whether the button is active
   */
  isActive: boolean;
  /**
   * Whether the button is disabled.
   */
  isDisabled: boolean;
  /**
   * Rel value used if the button is rendered as an `<a>` tag.
   */
  rel?: string | undefined;
  /**
   * Target value used if the button is rendered as an `<a>` tag.
   */
  target?: string | undefined;
  /**
   * The button type.
   */
  type?: 'button' | 'reset' | 'submit';
}

export const StyledButton = styled('button', {
  label: 'Button',
  themeKey: 'button',
})({
  alignItems: 'center',
  appearance: 'none',
  backgroundImage: 'linear-gradient(90deg, #0072EC 0%, #4E00C6 163.65%, #8C18E2 191.59%)',
  border: 0,
  borderRadius: 'small',
  boxSizing: 'border-box',
  color: '#FAFAFB',
  cursor: 'pointer',
  display: 'inline-flex',
  margin: 0,
  px: 4,
  py: 2,
  outline: 0,
  textDecoration: 'none',
  userSelect: 'none',

  '&:disabled': {
    backgroundImage: ' linear-gradient(90deg, #0072EC 0%, #4E00C6 163.65%, #8C18E2 191.59%)',
    color: 'rgba(250, 250, 251, 0.32)',
    cursor: 'default',
  },

  '&:hover': {
    backgroundImage:
      'linear-gradient(0deg, rgba(10, 21, 33, 0.2), rgba(10, 21, 33, 0.2)), linear-gradient(90deg, #0072EC 0%, #8C18E2 191.59%)',
  },

  '&:focus': {
    backgroundImage:
      'linear-gradient(0deg, rgba(10, 21, 33, 0.4), rgba(10, 21, 33, 0.4)), linear-gradient(90deg, #0072EC 0%, #8C18E2 191.59%)',
  },
});

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const {
      as = 'button',
      children,
      href,
      isActive,
      isDisabled,
      rel,
      target,
      tabIndex,
      type,
      ...other
    } = props;

    let buttonProps;

    if (as !== 'button') {
      buttonProps = {
        'aria-disabled': !isDisabled ? undefined : isDisabled,
        href: as === 'a' && isDisabled ? undefined : href,
        rel: as === 'a' ? rel : undefined,
        role: 'button',
        tabIndex: isDisabled ? undefined : 0,
        target: as === 'a' ? target : undefined,
      };
    } else {
      buttonProps = {
        disabled: isDisabled,
        tabIndex: isDisabled ? -1 : tabIndex,
        type: type ?? 'button',
      };
    }

    return (
      <StyledButton
        as={as}
        data-active={isActive ? '' : null}
        data-disabled={isDisabled ? '' : null}
        ref={ref}
        {...buttonProps}
        {...other}
      >
        <Typography className="manifest-ui-button__text" size="medium" variant="button">
          {children}
        </Typography>
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
