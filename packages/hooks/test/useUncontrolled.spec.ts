import { act, renderHook } from '../../../test/utils';
import { useUncontrolled } from '../src';

describe('@manifest-ui/hooks - useUncontrolled', () => {
  it('should be defined', () => {
    expect(useUncontrolled).toBeDefined();
  });

  it('should update prop value', () => {
    const callback = jest.fn();

    const { result } = renderHook(() =>
      useUncontrolled({ defaultValue: 'value', onChange: callback }),
    );

    let [value, setValue] = result.current;

    expect(value).toEqual('value');
    expect(callback).not.toHaveBeenCalled();

    act(() => {
      setValue('newValue');
    });

    [value, setValue] = result.current;

    expect(value).toBe('newValue');
    expect(callback).toHaveBeenLastCalledWith('newValue');
  });
});
