import * as React from 'react';
import { Button } from './Button';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';

describe('@manifest-ui/react - Button', () => {
  it('should pass accessibility', async () => {
    const rendered = render(<Button>Click Me</Button>);

    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  it('should render', () => {
    const container = render(<Button>Click Me</Button>);

    const button = container.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
