import * as React from 'react';
import { act, render, screen, testA11y, userEvent } from '../../../test/utils';
import { Radio, RadioGroup } from '../src';

describe('@manifest-ui/radio - RadioGroup', () => {
  it('should pass accessibility', async () => {
    await testA11y(
      <RadioGroup defaultValue="one">
        <Radio value="one">One</Radio>
        <Radio value="two">Two</Radio>
        <Radio value="three">Three</Radio>
      </RadioGroup>,
    );
  });

  it('should render and support checking the radios', () => {
    const { rerender } = render(
      <RadioGroup defaultValue="one">
        <Radio value="one">One</Radio>
        <Radio value="two">Two</Radio>
        <Radio value="three">Three</Radio>
      </RadioGroup>,
    );

    expect(screen.getByRole('radiogroup')).toBeVisible();

    const inputs = screen.queryAllByRole('radio');

    expect(inputs[0]).toBeChecked();
    expect(inputs[1]).not.toBeChecked();
    expect(inputs[2]).not.toBeChecked();

    act(() => {
      userEvent.click(inputs[2]);
    });

    expect(inputs[0]).not.toBeChecked();
    expect(inputs[1]).not.toBeChecked();
    expect(inputs[2]).toBeChecked();

    rerender(
      <RadioGroup defaultValue="one" direction="horizontal">
        <Radio value="one">One</Radio>
        <Radio value="two">Two</Radio>
        <Radio value="three">Three</Radio>
      </RadioGroup>,
    );

    expect(screen.getByRole('radiogroup')).toBeVisible();
  });

  it('should support controlled states', () => {
    const handleChange = jest.fn();

    render(
      <RadioGroup onChange={handleChange} value="one">
        <Radio value="one">One</Radio>
        <Radio value="two">Two</Radio>
        <Radio value="three">Three</Radio>
      </RadioGroup>,
    );

    const inputs = screen.queryAllByRole('radio');

    expect(inputs[0]).toBeChecked();
    expect(inputs[1]).not.toBeChecked();
    expect(inputs[2]).not.toBeChecked();

    act(() => {
      userEvent.click(inputs[2]);
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
