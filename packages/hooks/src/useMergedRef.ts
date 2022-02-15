import * as React from 'react';

export function setRef<T>(
  ref: React.MutableRefObject<T | null> | ((instance: T | null) => void) | null | undefined,
  value: T | null,
): void {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

export function useMergedRef<T>(...refs: React.Ref<T>[]) {
  return React.useCallback((node: T | null) => {
    refs.forEach(ref => setRef(ref, node));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}
