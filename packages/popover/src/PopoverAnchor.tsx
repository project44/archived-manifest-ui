import * as React from 'react';
import { PopperAnchor, PopperAnchorProps } from '@manifest-ui/popper';
import { useMergedRef } from '@manifest-ui/hooks';
import { usePopoverContext } from './context';

export type PopoverAnchorProps = PopperAnchorProps;

export const PopoverAnchor = React.forwardRef<Element, PopoverAnchorProps>(
  (props: PopoverAnchorProps, ref) => {
    const { anchorRef, setHasAnchor } = usePopoverContext();

    React.useEffect(() => {
      setHasAnchor?.(true);
      return () => {
        setHasAnchor?.(false);
      };
    }, [setHasAnchor]);

    return <PopperAnchor ref={useMergedRef(anchorRef, ref)} {...props} />;
  },
);

PopoverAnchor.displayName = 'PopoverAnchor';
