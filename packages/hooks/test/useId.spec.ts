import { renderHook } from '../../../test/utils';
import { useId } from '../src';

describe('@manifest-ui/hooks - useId', () => {
  it('should be defined', () => {
    expect(useId).toBeDefined();
  });

  it('should return an id', () => {
    const { result } = renderHook(() => useId());

    expect(result.current.includes('manifestui-id-')).toBe(true);
  });

  it('should return the default id', () => {
    const { result } = renderHook(() => useId('test-id'));

    expect(result.current).toEqual('test-id');
  });
});
