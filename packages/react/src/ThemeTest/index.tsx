import React from 'react';
import { useManifestTheme } from '..';

export const ThemeTest = () => {
  const theme = useManifestTheme();

  return (
    <pre>
      <code style={{ color: theme.colors.blue500.computedValue }}>
        {JSON.stringify(theme, null, 2)}
      </code>
    </pre>
  );
};
