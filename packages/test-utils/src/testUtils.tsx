import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent, RenderOptions } from '@testing-library/react';

expect.extend(toHaveNoViolations);

export type RenderA11yOptions = RenderOptions & {
  axeOptions?: Parameters<typeof axe>[1];
};

/**
 * Wrapper for jest-axe
 *
 * @see https://github.com/nickcolley/jest-axe#testing-react-with-react-testing-library
 *
 * @example
 * ```jsx
 *  it('passes a11y test', async () => {
 *    await testA11Y(<MyComponent />, options);
 *  });
 * ```
 */
export const testA11y = async (
  ui: Parameters<typeof render>[0] | Element,
  { axeOptions, ...options }: RenderA11yOptions = {},
) => {
  const container = React.isValidElement(ui)
    ? render(ui, options).container
    : ui;

  const results = await axe(container, axeOptions);

  expect(results).toHaveNoViolations();
};

export * from '@testing-library/react';
export { act as invoke, renderHook } from '@testing-library/react-hooks';
export type {
  RenderHookOptions,
  RenderHookResult,
} from '@testing-library/react-hooks';
export { default as userEvent } from '@testing-library/user-event';

// Simulate press events
export function triggerPress(element: Element, opts = {}) {
  fireEvent.mouseDown(element, { detail: 1, ...opts });
  fireEvent.mouseUp(element, { detail: 1, ...opts });
  fireEvent.click(element, { detail: 1, ...opts });
}
