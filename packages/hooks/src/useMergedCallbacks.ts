import { useCallbackRef } from './useCallbackRef';

export function useMergedCallbacks<Args extends unknown[]>(
  ...callbacks: (((...args: Args) => void) | undefined)[]
) {
  return useCallbackRef((...args: Args) => {
    callbacks.some(fn => {
      fn?.(...args);
    });
  });
}
