/**
 * Inspired by the test-utils from chakra-ui:
 *
 * https://github.com/chakra-ui/chakra-ui/blob/main/tooling/test-utils/src/test-utils.tsx
 */
import '@testing-library/jest-dom/extend-expect';
import * as React from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import {
  RenderResult,
  render as rtlRender,
  RenderOptions as RtlRenderOptions,
} from '@testing-library/react';
import { RunOptions } from 'axe-core';

expect.extend(toHaveNoViolations);

export interface RenderOptions extends Omit<RtlRenderOptions, 'wrapper'> {
  wrapper?: typeof Wrapper;
}

export type RenderA11yOptions = RenderOptions & { axeOptions?: RunOptions };

function Wrapper({ children }: { children: React.ReactElement }) {
  return children;
}

export const render = (
  ui: Parameters<typeof rtlRender>[0],
  { wrapper: RenderWrapper = Wrapper, ...options }: RenderOptions = {},
): RenderResult => rtlRender(<RenderWrapper>{ui}</RenderWrapper>, options);

export const renderA11y = async (
  ui: Parameters<typeof rtlRender>[0] | Element,
  { axeOptions, ...options }: RenderA11yOptions,
) => {
  const container = React.isValidElement(ui) ? render(ui, options).container : ui;
  // @ts-expect-error: axe-core and jest axe run options are typed a bit differently;
  const results = await axe(container, axeOptions);

  expect(results).toHaveNoViolations();
};

export * from '@testing-library/react';

export {
  act as invoke,
  renderHook,
  RenderHookOptions,
  RenderHookResult,
} from '@testing-library/react-hooks';

export { default as userEvent } from '@testing-library/user-event';
