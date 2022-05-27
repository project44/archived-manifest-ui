import * as React from 'react';
import { globalStyles } from '../../styles';

export const CssBaseline = React.memo<React.PropsWithChildren<unknown>>(({ children }) => {
  globalStyles();

  return <>{children}</>;
});

CssBaseline.displayName = 'ManifestCssBaseline';
