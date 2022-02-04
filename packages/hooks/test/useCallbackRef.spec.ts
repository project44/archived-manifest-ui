import { act, renderHook } from '../../../test/utils';
import { useCallbackRef } from '../src';

describe('@manifest-ui/hooks - useCallbackRef', () => {
  it('should be defined', () => {
    expect(useCallbackRef).toBeDefined();
  });

  it('should return a callback', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useCallbackRef(callback));

    act(() => {
      result.current();
    });

    expect(callback).toHaveBeenCalled();
  });
});
