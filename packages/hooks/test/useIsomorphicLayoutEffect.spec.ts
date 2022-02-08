import { renderHook } from '../../../test/utils';
import { useIsomorphicLayoutEffect } from '../src';

describe('@manifest-ui/hooks - useIsomorphicLayoutEffect', () => {
  it('should be defined', () => {
    expect(useIsomorphicLayoutEffect).toBeDefined();
  });

  it('should execute callback', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useIsomorphicLayoutEffect(callback));

    expect(result.current).toBeUndefined();
    expect(callback).toHaveBeenCalled();
  });
});
