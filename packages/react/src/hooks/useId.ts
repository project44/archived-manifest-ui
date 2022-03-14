import * as React from 'react';
import uniqueId from 'lodash.uniqueid';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export function useId(idProp?: string) {
  const [id, setId] = React.useState('');

  useIsomorphicLayoutEffect(() => {
    setId(uniqueId());
  }, []);

  return React.useMemo(() => idProp ?? `manifestui-id-${id}`, [id, idProp]);
}
