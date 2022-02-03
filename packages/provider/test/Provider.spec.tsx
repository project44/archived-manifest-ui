import * as React from 'react';
import { Provider } from '../src';
import { renderHook } from '../../../test/utils';
import { useTheme } from '@manifest-ui/theme';

const Wrapper: React.FC = props => {
  return <Provider>{props.children}</Provider>;
};

describe('@manifest-ui/provider', () => {
  it('should provide a theme', () => {
    const { result } = renderHook(() => useTheme(), { wrapper: Wrapper });

    expect(result.current).toEqual(expect.objectContaining({ direction: 'ltr' }));
  });
});
