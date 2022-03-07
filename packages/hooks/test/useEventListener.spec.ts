import { fireEvent, renderHook } from '../../../test/utils';
import { useEventListener } from '../src';

describe('@manifest-ui/hooks - useEventListener', () => {
  let target: HTMLDivElement;

  beforeEach(() => {
    target = document.createElement('div');

    document.body.appendChild(target);
  });

  afterEach(() => {
    document.body.removeChild(target);
  });

  it('should be defined', () => {
    expect(useEventListener).toBeDefined();
  });

  it('should attach an event listener', () => {
    const eventListener = jest.fn<void, [MouseEvent]>();

    renderHook(() => useEventListener('click', eventListener, { current: target }));

    fireEvent.click(target);
    expect(eventListener).toHaveBeenCalledTimes(1);
  });

  it('should attach an event listener to the window if target is missing', () => {
    const eventListener = jest.fn<void, [MouseEvent]>();

    renderHook(() => useEventListener('click', eventListener));

    fireEvent.click(window);
    expect(eventListener).toHaveBeenCalledTimes(1);
  });

  test('should remove eventer listener when unmounted', () => {
    const eventListener = jest.fn<void, [MouseEvent]>();

    const { unmount } = renderHook(() => {
      useEventListener('click', eventListener, { current: target });
    });

    fireEvent.click(target);

    expect(eventListener).toHaveBeenCalledTimes(1);

    unmount();

    fireEvent.click(target);

    expect(eventListener).toHaveBeenCalledTimes(1);
  });
});
