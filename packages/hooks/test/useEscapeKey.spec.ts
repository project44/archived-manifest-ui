import { act, renderHook, userEvent } from '../../../test/utils';
import { useEscapeKey } from '../src';

describe('@manifest-ui/hooks - useEscapeKey', () => {
  it('should execute handler when the escape key is pressed', () => {
    const handler = jest.fn();

    renderHook(() => useEscapeKey(handler));

    act(() => {
      userEvent.keyboard('{esc}');
    });

    expect(handler).toHaveBeenCalled();
  });

  it('should not execute handler when any other key is pressed', () => {
    const handler = jest.fn();

    renderHook(() => useEscapeKey(handler));

    act(() => {
      userEvent.keyboard('{enter}');
    });

    expect(handler).not.toHaveBeenCalled();
  });
});
