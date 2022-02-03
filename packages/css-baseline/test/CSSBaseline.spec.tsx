import * as React from 'react';
import { render, screen } from '../../../test/utils';
import { CSSBaseline } from '../src';

describe('@manifest-ui/css-baseline', () => {
  it('should return a generated theme', () => {
    render(
      <>
        <CSSBaseline />
        <div>hello world</div>
      </>,
    );

    expect(screen.getByText('hello world')).toHaveStyle('box-sizing: border-box');
  });
});
