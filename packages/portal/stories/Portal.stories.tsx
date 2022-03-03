import * as React from 'react';
import { Portal, PortalProps } from '../src';

export default {
  title: 'Components/Portal',
  component: Portal,
};

export const Default = (args: PortalProps) => <Portal {...args} />;

Default.args = {
  children: <div>Im appended to the document.body!</div>,
};

export const ContainerRef = () => {
  const ref = React.useRef();

  return (
    <>
      <div>This text is not within a portal</div>
      <div ref={ref}>Container Ref</div>
      <Portal containerRef={ref}>
        <div>This text is inside a portal!</div>
      </Portal>
    </>
  );
};
