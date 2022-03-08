import * as React from 'react';
import { Slot, SlotProps } from '@manifest-ui/slot';
import { usePoppperContext } from './context';

export const PopperAnchor: React.FC<SlotProps> = props => {
  const { setAnchorElement } = usePoppperContext();

  return <Slot ref={setAnchorElement} {...props} />;
};

PopperAnchor.displayName = 'PopperAnchor';
