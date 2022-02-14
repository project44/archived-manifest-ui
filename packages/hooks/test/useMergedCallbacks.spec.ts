import { act, renderHook } from '../../../test/utils';
import { useMergedCallbacks } from '../src';

describe('@manifest-ui/hooks - useMergedCallbacks', () => {
  it('should be defined', () => {
    expect(useMergedCallbacks).toBeDefined();
  });

  it('should return an callback function', () => {
    const func1 = jest.fn();
    const func2 = jest.fn();

    const { result } = renderHook(() => useMergedCallbacks(func1, func2));

    act(() => {
      result.current();
    });

    expect(func1).toHaveBeenCalledTimes(1);
    expect(func2).toHaveBeenCalledTimes(1);
  });
});
