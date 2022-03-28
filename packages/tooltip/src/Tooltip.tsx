import * as React from 'react';
import {
  Tooltip as RadixTooltip,
  TooltipTrigger as RadixTooltipTrigger,
} from '@radix-ui/react-tooltip';
import { ComponentProps } from '@manifest-ui/styled';
import { StyledTooltip } from './Tooltip.styles';

export type Align = 'center' | 'end' | 'start';
export type Placement = 'bottom' | 'left' | 'right' | 'top';

export interface TooltipOptions {
  /**
   * Alignment of the menu in relation to its trigger.
   *
   * @default `center`
   */
  align?: Align;
  /**
   * The amount of time to delay the display of the tooltip.
   *
   * @default 300
   */
  delayDuration?: number;
  /**
   * The label of the tooltip
   */
  label?: React.ReactNode;
  /**
   * Whether the dialog is open.
   */
  isOpen?: boolean;
  /**
   * The offset of the menu in relation to its trigger.
   */
  offset?: [crossAxis: number, mainAxis: number];
  /**
   * Placement of the menu in relation to its trigger.
   *
   * @default `bottom`
   */
  placement?: Placement;
  /**
   * Callback executed on tooltip state change.
   */
  onChange?(isOpen: boolean): void;
}

export interface TooltipProps
  extends Omit<ComponentProps<typeof StyledTooltip>, 'onChange'>,
    TooltipOptions {}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  const {
    align = 'center',
    children,
    delayDuration = 300,
    label,
    isOpen,
    offset = [0, 4],
    placement = 'bottom',
    onChange,
    ...other
  } = props;

  return (
    <RadixTooltip delayDuration={delayDuration} open={isOpen} onOpenChange={onChange}>
      <RadixTooltipTrigger asChild>{children}</RadixTooltipTrigger>
      <StyledTooltip
        align={align}
        alignOffset={offset?.[0]}
        side={placement}
        sideOffset={offset?.[1]}
        ref={ref}
        {...other}
      >
        {label}
      </StyledTooltip>
    </RadixTooltip>
  );
});

Tooltip.displayName = 'Tooltip';
