import * as React from 'react';
import { render, screen } from '../../../test/utils';
import { Fab } from '../src';

describe('@manifest-ui/button - Fab', () => {
  it('should render', () => {
    render(<Fab />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
