import * as React from 'react';
import { Body, Heading, Overline } from './typography';
import { defaultTheme } from './themes';
import { Link } from './link';
import { Provider } from './provider';

const Welcome = () => (
  <Provider theme={defaultTheme}>
    <Overline>The project44 design system</Overline>
    <Heading>Welcome to Manifest UI</Heading>
    <br />
    <Body>
      This is the developer Storybook of Manifest UI. Here you can interact with the system
      components directly.
      <br />
      To learn more about how to use components, usage, and design guidelines head over to the{' '}
      <Link href="https://p44design.systems">Design Systems Website</Link>.
    </Body>
  </Provider>
);

export default {
  title: 'Welcome',
  component: Welcome,
  argTypes: {
    children: { control: 'text' },
  },
  parameters: { options: { showPanel: false } },
};

export const Intro = () => <Welcome />;
