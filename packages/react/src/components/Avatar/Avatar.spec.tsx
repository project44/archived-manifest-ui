import * as React from 'react';
import { waitFor, render } from '@testing-library/react';
import { Avatar } from './Avatar';
import { axe } from 'jest-axe';

describe('@manifest-ui/react - Avatar', () => {
  const orignalGlobalImage = window.Image;

  beforeAll(() => {
    (window.Image as any) = class MockImage {
      onload: () => void = () => {
        // noop
      };
      src = '';
      constructor() {
        setTimeout(() => {
          this.onload();
        }, 300);
        return this;
      }
    };
  });

  afterAll(() => {
    window.Image = orignalGlobalImage;
  });

  it('should pass accessibility', async () => {
    const rendered = render(
      <Avatar
        fallback="MU"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
      />,
    );

    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  it('should render', async () => {
    const container = render(
      <Avatar
        fallback="MU"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
      />,
    );

    expect(container.getByText('MU')).toBeInTheDocument();

    await waitFor(() => {
      expect(container.getByRole('img')).toBeInTheDocument();
    });
  });
});
