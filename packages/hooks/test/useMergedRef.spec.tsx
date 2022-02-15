import * as React from 'react';
import { render } from '../../../test/utils';
import { useMergedRef } from '../src';

function TestComponent({
  testRef: forwardedRef,
}: {
  testRef: React.ForwardedRef<HTMLButtonElement>;
}) {
  const ref = React.useRef<HTMLButtonElement>();

  return <button ref={useMergedRef(ref, forwardedRef)} type="button" />;
}

describe('@manifest-ui/hooks - useMergedRef', () => {
  it('should be defined', () => {
    expect(useMergedRef).toBeDefined();
  });

  it('should merge refs', () => {
    const testRef = React.createRef<HTMLButtonElement>();

    render(<TestComponent testRef={testRef} />);

    expect(testRef.current instanceof HTMLButtonElement).toBe(true);
  });
});
