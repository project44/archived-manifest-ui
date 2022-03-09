import * as React from 'react';
import { Slot, SlotProps } from '@manifest-ui/slot';
import { useMergedRef } from '@manifest-ui/hooks';
import { usePoppperContext } from './context';

export type PopperAnchorProps = SlotProps;

export const PopperAnchor = React.forwardRef<Element, PopperAnchorProps>((props, ref) => {
  const { setAnchorElement } = usePoppperContext();
  const mergedRef = useMergedRef(ref, setAnchorElement) as any;

  return <Slot ref={mergedRef} {...props} />;
});

PopperAnchor.displayName = 'PopperAnchor';
