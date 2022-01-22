import * as React from 'react';
import { render, screen } from '../../../test/utils';
import { styled } from '../src';

describe('@dolly/system - styled', () => {
  it('should use the componentName if available', () => {
    const TestComponent = styled('div', { name: 'TestComponent' })({});

    expect(TestComponent).toHaveProperty('displayName', 'TestComponent');
  });

  it('should fallback to default theme', () => {
    const Button = styled('button', {
      name: 'button',
      slot: 'root',
    })({
      backgroundColor: 'primary',
    });

    render(<Button>Hello</Button>);

    expect(screen.getByText('Hello')).toHaveStyle('background-color: #0072EC');
  });

  it('should handle being called without options', () => {
    const Button = styled('button')({
      backgroundColor: 'primary',
    });

    render(<Button>Hello</Button>);

    expect(screen.getByText('Hello')).toHaveStyle('background-color: #0072EC');
  });

  it('should support overrides via the theme', () => {
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
      name: 'button',
      slot: 'root',
    })({
      width: 'small',
    });

    render(<Button theme={theme}>Hello</Button>);

    expect(screen.getByText('Hello')).toHaveStyle('width: 300px');
  });

  it('should support variants', () => {
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
      name: 'button',
      slot: 'root',
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

  it('should support sizes', () => {
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
      name: 'button',
      slot: 'root',
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
    const Button = styled('button', {
      name: 'button',
      slot: 'root',
    })(() => ({
      height: 200,
    }));

    render(<Button>Hello</Button>);

    expect(screen.getByText('Hello')).toHaveStyle('height: 200px');
  });

  it('should support multiple overrides', () => {
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
          variants: {
            outlined: {
              border: '1px solid black',
            },
          },
        },
      },
    };

    const Button = styled('button', {
      name: 'button',
      slot: 'root',
    })({
      color: 'black',
      border: 'none',
      width: 'medium',
    });

    const { rerender } = render(<Button theme={theme}>Hello</Button>);

    expect(screen.getByText('Hello')).toHaveStyle('width: 300px');
    expect(screen.getByText('Hello')).toHaveStyle('border: none');

    rerender(
      <Button size="small" variant="outlined" theme={theme}>
        Hello
      </Button>,
    );

    expect(screen.getByText('Hello')).toHaveStyle('border: 1px solid black');
    expect(screen.getByText('Hello')).toHaveStyle('width: 200px');
  });

  it('should not fail if prop doesnt match theme config', () => {
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
          variants: {
            outlined: {
              border: '1px solid black',
            },
          },
        },
      },
    };

    const Button = styled('button', {
      name: 'button',
      slot: 'root',
    })({
      color: 'black',
      border: 'none',
      width: 'medium',
    });

    render(
      <Button size="medium" variant="test" theme={theme}>
        Hello
      </Button>,
    );

    expect(screen.getByText('Hello')).toHaveStyle('width: 300px');
    expect(screen.getByText('Hello')).toHaveStyle('border: none');
  });

  it('should support the sx prop', () => {
    const theme = {
      sizes: {
        small: 200,
        medium: 300,
      },
    };

    const Button = styled('button', {
      name: 'button',
      slot: 'root',
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
});
