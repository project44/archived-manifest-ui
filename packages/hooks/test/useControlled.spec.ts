import { act, renderHook } from '../../../test/utils';
import { useControlled } from '../src';

describe('@manifest-ui/hooks - useControlled', () => {
  it('should be defined', () => {
    expect(useControlled).toBeDefined();
  });

  it('should support an uncontrolled prop', () => {
    const propValue = 'value';
    const callback = jest.fn();

    const { result } = renderHook(() =>
      useControlled({ defaultValue: 'value', onChange: callback }),
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

  it('should support a controlled prop', () => {
    const callback = jest.fn();

    const { result } = renderHook(() => useControlled({ value: 'value', onChange: callback }));

    let [value, setValue] = result.current;

    expect(value).toEqual('value');
    expect(callback).not.toHaveBeenCalled();

    act(() => {
      setValue('newValue');
    });

    [value, setValue] = result.current;

    expect(value).toBe('value');
    expect(callback).toHaveBeenLastCalledWith('newValue');

    // Callback shouldn't be called if new value is the same as existing value
    callback.mockClear();

    act(() => {
      setValue(() => 'value');
    });

    [value, setValue] = result.current;

    expect(value).toBe('value');
    expect(callback).not.toHaveBeenCalled();
  });
});
