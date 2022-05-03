import * as React from 'react';
import { render, screen } from '@manifest-ui/test-utils';
import { createStyled } from '../src';

describe('@manifest-ui/system - createStyled', () => {
  const styled = createStyled();

  it('should use the componentName if available', () => {
    const TestComponent = styled('div', { label: 'TestComponent' })({});

    expect(TestComponent).toHaveProperty('displayName', 'TestComponent');
  });

  it('should handle being called without options', () => {
    const theme = {
      colors: {
        primary: {
          500: '#0072EC',
        },
      },
    };

    const Button = styled('button')({
      backgroundColor: 'primary.500',
    });

    render(<Button theme={theme}>Hello</Button>);

    expect(screen.getByText('Hello')).toHaveStyle('background-color: #0072EC');
  });

  it('should support a style function', () => {
    const Button = styled('button')(() => ({
      height: 200,
    }));

    render(<Button>Hello</Button>);

    expect(screen.getByText('Hello')).toHaveStyle('height: 200px');
  });

  it('should support the sx prop as the highest priority', () => {
    const theme = {
      sizes: {
        medium: 300,
        small: 200,
      },
    };

    const Button = styled('button')({
      border: 'none',
    });

    render(
      <Button sx={{ border: '1px solid black', width: 'small' }} theme={theme}>
        Hello
      </Button>,
    );

    expect(screen.getByText('Hello')).toHaveStyle('border: 1px solid black');
    expect(screen.getByText('Hello')).toHaveStyle('width: 200px');
  });
});
