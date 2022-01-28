import * as React from 'react';
import { render, screen } from '../../../test/utils';
import { Grid } from '../src';

describe('@manifest-ui/layout - grid', () => {
  it('should render with columns', () => {
    render(
      <Grid data-testid="grid-root" columns={[1, 1, 2, 3]}>
        <div>Child</div>
        <div>Child</div>
        <div>Child</div>
        <div>Child</div>
      </Grid>,
    );

    expect(screen.getByTestId('grid-root')).toHaveStyle('grid-template-columns: repeat(1, 1fr)');
  });

  it('should render with column widths', () => {
    render(
      <Grid data-testid="grid-root" columnWidth={['20px', '30px', '40px', '50px']}>
        <div>Child</div>
        <div>Child</div>
        <div>Child</div>
        <div>Child</div>
      </Grid>,
    );

    expect(screen.getByTestId('grid-root')).toHaveStyle(
      'grid-template-columns: repeat(auto-fit, minmax(20px, 1fr))',
    );
  });
});
