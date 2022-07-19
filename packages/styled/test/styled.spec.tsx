import * as React from 'react';
import { render, screen } from '../../../test/utils';
import { styled } from '../src';

describe('@manifest-ui/styled - styled', () => {
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

  it('should support theme overrides', () => {
    const theme = {
      sizes: {
        small: 200,
        medium: 300,
      },
      components: {
        button: {
          slots: {
            root: {
              width: 'medium',
            },
          },
        },
      },
    };

    const Button = styled('button', {
      slot: 'root',
      themeKey: 'button',
    })({
      width: 'small',
    });

    render(<Button theme={theme}>Hello</Button>);

    expect(screen.getByText('Hello')).toHaveStyle('width: 300px');
  });

  it('should support theme variants', () => {
    const theme = {
      components: {
        button: {
          variants: {
            outlined: {
              border: '1px solid black',
            },
          },
        },
      },
    };

    const Button = styled('button', {
      themeKey: 'button',
    })({
      border: 'none',
    });

    const { rerender } = render(<Button theme={theme}>Hello</Button>);

    expect(screen.getByText('Hello')).toHaveStyle('border: none');

    rerender(
      <Button variant="outlined" theme={theme}>
        Hello
      </Button>,
    );

    expect(screen.getByText('Hello')).toHaveStyle('border: 1px solid black');
  });

  it('should support theme sizes', () => {
    const theme = {
      sizes: {
        small: 200,
        medium: 300,
      },
      components: {
        button: {
          sizes: {
            small: {
              width: 'small',
            },
          },
        },
      },
    };

    const Button = styled('button', {
      themeKey: 'button',
    })({
      width: 'medium',
    });

    const { rerender } = render(<Button theme={theme}>Hello</Button>);

    expect(screen.getByText('Hello')).toHaveStyle('width: 300px');

    rerender(
      <Button size="small" theme={theme}>
        Hello
      </Button>,
    );

    expect(screen.getByText('Hello')).toHaveStyle('width: 200px');
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
        small: 200,
        medium: 300,
      },
      components: {
        button: {
          variants: {
            outlined: {
              border: '1px solid pink',
            },
          },
        },
      },
    };

    const Button = styled('button', {
      themeKey: 'button',
    })({
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

  it('should support styling styled compponents', () => {
    const Button = styled('button')(({ variant }) => ({
      ...(variant === 'test' && {
        height: 200,
      }),
    }));

    const StyledButton = styled(Button)({
      color: 'pink',
    });

    render(<StyledButton variant="test">Hello</StyledButton>);

    expect(screen.getByText('Hello')).toHaveStyle('color: pink; height: 200px');
  });
});
