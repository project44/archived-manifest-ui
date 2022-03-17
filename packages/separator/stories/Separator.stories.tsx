import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { Separator, SeparatorProps } from '../src';

export default {
  title: 'Components/Separator',
  component: Separator,
  argTypes: {
    orientation: {
      name: 'orientation',
      type: { name: 'string', required: false },
      description: 'Separator orientation',
      table: {
        type: {
          summary: 'horizontal|vertical',
        },
        defaultValue: { summary: 'horizontal' },
      },
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
  },
} as Meta;

const Template: Story<SeparatorProps> = args => (
  <section
    style={{
      display: 'flex',
      ...(args.orientation === 'horizontal' ? { flexDirection: 'column' } : {}),
    }}
  >
    <div style={{ padding: '16px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    <Separator {...args} />
    <div style={{ padding: '16px' }}>
      Curabitur at facilisis ex, sed lobortis nibh. Fusce aliquam velit et hendrerit ullamcorper.
    </div>
  </section>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: 'horizontal',
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical',
};
