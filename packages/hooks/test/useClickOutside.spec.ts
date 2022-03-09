import { act, fireEvent, renderHook } from '../../../test/utils';
import { useClickOutside } from '../src';

describe('@manifest-ui/hooks - useClickOutside', () => {
  let handler;
  let target: HTMLDivElement;

  beforeEach(() => {
    handler = jest.fn();
    target = document.createElement('div');

    document.body.appendChild(target);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    renderHook(() => useClickOutside(handler, [{ current: target }]));
  });

  afterEach(() => {
    target.remove();
  });

  it('should call the event handler on click outside', () => {
    act(() => {
      fireEvent.click(document.body);
    });

    expect(handler).toHaveBeenCalled();
  });

  it('should call the event handler on touch outside', () => {
    act(() => {
      fireEvent.touchEnd(document.body);
    });

    expect(handler).toHaveBeenCalled();
  });

  it('should not call the event handler when clicking the element', () => {
    act(() => {
      fireEvent.click(target);
    });

    expect(handler).not.toHaveBeenCalled();
  });

  it('should not call the event handler when touching the element', () => {
    act(() => {
      fireEvent.touchEnd(target);
    });

    expect(handler).not.toHaveBeenCalled();
  });
});
