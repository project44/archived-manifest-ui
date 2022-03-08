import * as React from 'react';
import { mergeProps, mergeRefs } from '@manifest-ui/utils';

export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Slot = React.forwardRef<HTMLElement, SlotProps>((props: SlotProps, ref) => {
  const { children, ...other } = props;

  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...mergeProps(other, children.props),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      ref: mergeRefs(ref, (children as any).ref),
    });
  }

  return React.Children.count(children) > 1 ? React.Children.only(null) : null;
});

Slot.displayName = 'Slot';
