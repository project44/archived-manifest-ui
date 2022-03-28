import * as React from 'react';
import { mergeRefs } from '@manifest-ui/utils';

export function useMergedRef<T>(...refs: (React.Ref<T> | undefined)[]) {
  return React.useCallback(mergeRefs(...refs), refs);
}
