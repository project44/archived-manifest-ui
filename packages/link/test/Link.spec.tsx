import * as React from 'react';
import { render, screen } from '../../../test/utils';
import { Link } from '../src';

describe('@manifest-ui/link', () => {
  it('should render', () => {
    render(<Link href="https://p44design.systems/">Test</Link>);

    expect(screen.getByRole('link')).toBeVisible();
  });
});
