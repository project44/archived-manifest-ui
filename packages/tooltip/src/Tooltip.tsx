import * as React from 'react';
import { Popper, PopperAnchor, PopperProps } from '@manifest-ui/popper';
import { useControlled, useEscapeKey, useId } from '@manifest-ui/hooks';
import { chainCallbacks } from '@manifest-ui/utils';
import { ComponentProps } from '@manifest-ui/styled';
import { StyledTooltip } from './Tooltip.styles';

export interface TooltipOptions {
  /**
   * Delay before closing the tooltip (ms).
   *
   * @default 0
   */
  closeDelay?: number;
  /**
   * Whether the popover is open by default.
   */
  defaultOpen?: boolean;
  /**
   * The label of the tooltip
   */
  label?: React.ReactNode;
  /**
   * Whether the popover is open.
   *
   * @default false
   */
  isOpen?: boolean;
  /**
   * Delay before opening the tooltip (ms).
   *
   * @default 0
   */
  openDelay?: number;
  /**
   * Callback executed on popover state change.
   */
  onChange?(isOpen: boolean): void;
  /**
   * Callback fired when the escape key is pressed.
   */
  onEscapeKeyDown?(event: KeyboardEvent): void;
}

export interface TooltipProps
  extends Omit<ComponentProps<typeof StyledTooltip>, 'children' | 'onChange'>,
    TooltipOptions,
    PopperProps {}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  const {
    children,
    closeDelay = 0,
    defaultOpen: defaultValue,
    disablePortal,
    gutter,
    label,
    isOpen: value,
    modifiers,
    openDelay = 0,
    onBlur,
    onChange,
    onEscapeKeyDown,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    placement,
    ...other
  } = props;

  const enterTimeoutRef = React.useRef<number>();
  const exitTimeoutRef = React.useRef<number>();

  const id = useId();

  const [isOpen = false, setIsOpen] = useControlled({ defaultValue, onChange, value });

  const handleClose = React.useCallback(() => {
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
    }

    exitTimeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, closeDelay);
  }, [closeDelay, setIsOpen]);

  const handleOpen = React.useCallback(() => {
    enterTimeoutRef.current = window.setTimeout(() => {
      setIsOpen(true);
    }, openDelay);
  }, [openDelay, setIsOpen]);

  React.useEffect(
    () => () => {
      clearTimeout(enterTimeoutRef.current);
      clearTimeout(exitTimeoutRef.current);
    },
    [],
  );

  useEscapeKey((event: KeyboardEvent) => {
    if (!isOpen) return;

    onEscapeKeyDown?.(event);

    setIsOpen(false);
  });

  return (
    <Popper
      disablePortal={disablePortal}
      gutter={gutter}
      isOpen={isOpen}
      modifiers={modifiers}
      placement={placement}
    >
      <PopperAnchor
        aria-describedby={isOpen ? id : undefined}
        onBlur={chainCallbacks(onBlur, handleClose)}
        onFocus={chainCallbacks(onFocus, handleOpen)}
        onMouseEnter={chainCallbacks(onMouseEnter, handleOpen)}
        onMouseLeave={chainCallbacks(onMouseLeave, handleClose)}
      >
        {children}
      </PopperAnchor>
      <StyledTooltip id={id} role="tooltip" {...other}>
        {label}
      </StyledTooltip>
    </Popper>
  );
});

Tooltip.displayName = 'Tooltip';
