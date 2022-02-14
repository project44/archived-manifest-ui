import * as React from 'react';
import { act, render, screen, testA11y, userEvent } from '../../../test/utils';
import { Radio } from '../src';

describe('@manifest-ui/radio - Radio', () => {
  it('should pass accessibility', async () => {
    await testA11y(<Radio>Radio</Radio>);
  });

  it('should render and support checking the radio', () => {
    render(<Radio>Radio</Radio>);

    const input = screen.getByRole('radio');

    expect(input).not.toBeChecked();

    act(() => {
      userEvent.click(input);
    });

    expect(input).toBeChecked();
  });
});
