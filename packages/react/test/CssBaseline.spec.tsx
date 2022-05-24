import * as React from 'react';
import { render, screen } from '@manifest-ui/test-utils';
import { CssBaseline } from '../src';

describe('@manifest/react - CssBaseline', () => {
  it('should render', () => {
    render(
      <>
        <CssBaseline />
        <div>hello world</div>
      </>,
    );

    expect(screen.getByText('hello world')).toBeInTheDocument();
  });
});
