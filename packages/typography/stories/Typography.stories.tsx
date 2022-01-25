import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { Typography, TypographyProps } from '../src';
import { Box } from '@manifest-ui/box';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    size: {
      name: 'size',
      type: { name: 'string', required: false },
      description: 'Typography sizes',
      table: {
        type: {
          summary: 'x-small|small|medium|large|x-large|xx-large',
        },
        defaultValue: { summary: 'medium' },
      },
      control: { type: 'radio' },
      options: ['x-small', 'small', 'medium', 'large', 'x-large', 'xx-large'],
    },
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      description: 'Typography variants',
      table: {
        type: {
          summary:
            'heading1|heading2|body1|body2|button|link|caption1|caption2|overline|footnote1|footnote2',
        },
        defaultValue: { summary: 'body1' },
      },
      control: { type: 'radio' },
      options: [
        'heading1',
        'heading2',
        'body1',
        'body2',
        'button',
        'link',
        'caption1',
        'caption2',
        'overline',
        'footnote1',
        'footnote1',
      ],
    },
  },
} as Meta;

const Template: Story<TypographyProps> = args => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Typography',
};

export const Heading = () => (
  <Box
    sx={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '14px',
    }}
  >
    <Typography size="xx-large" variant="heading1">
      Advanced Supply Chain Visibility
    </Typography>
    <Typography size="xx-large" variant="heading2">
      Advanced Supply Chain Visibility
    </Typography>

    <Typography size="x-large" variant="heading1">
      Advanced Supply Chain Visibility
    </Typography>
    <Typography size="x-large" variant="heading2">
      Advanced Supply Chain Visibility
    </Typography>

    <Typography size="large" variant="heading1">
      Advanced Supply Chain Visibility
    </Typography>
    <Typography size="large" variant="heading2">
      Advanced Supply Chain Visibility
    </Typography>

    <Typography size="medium" variant="heading1">
      Advanced Supply Chain Visibility
    </Typography>
    <Typography size="medium" variant="heading2">
      Advanced Supply Chain Visibility
    </Typography>

    <Typography size="small" variant="heading1">
      Advanced Supply Chain Visibility
    </Typography>
    <Typography size="small" variant="heading2">
      Advanced Supply Chain Visibility
    </Typography>

    <Typography size="x-small" variant="heading1">
      Advanced Supply Chain Visibility
    </Typography>
    <Typography size="x-small" variant="heading2">
      Advanced Supply Chain Visibility
    </Typography>
  </Box>
);

export const Body = () => (
  <Box
    sx={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '14px',
    }}
  >
    <Typography size="medium" variant="body1">
      Advanced Supply Chain Visibility
    </Typography>
    <Typography size="medium" variant="body2">
      Advanced Supply Chain Visibility
    </Typography>

    <Typography size="small" variant="body1">
      Advanced Supply Chain Visibility
    </Typography>
    <Typography size="small" variant="body2">
      Advanced Supply Chain Visibility
    </Typography>
  </Box>
);

export const Button = () => (
  <Box
    sx={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '14px',
    }}
  >
    <Typography size="medium" variant="button">
      Button
    </Typography>

    <Typography size="small" variant="button">
      Button
    </Typography>
  </Box>
);

export const Link = () => (
  <Box
    sx={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '14px',
    }}
  >
    <Typography size="medium" variant="link">
      Link
    </Typography>

    <Typography size="small" variant="link">
      Link
    </Typography>
  </Box>
);

export const Caption = () => (
  <Box
    sx={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '14px',
    }}
  >
    <Typography size="medium" variant="caption1">
      Advanced Supply Chain Visibility
    </Typography>
    <Typography size="medium" variant="caption2">
      Advanced Supply Chain Visibility
    </Typography>

    <Typography size="small" variant="caption1">
      Advanced Supply Chain Visibility
    </Typography>
    <Typography size="small" variant="caption2">
      Advanced Supply Chain Visibility
    </Typography>
  </Box>
);

export const Overline = () => (
  <Box
    sx={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '14px',
    }}
  >
    <Typography size="large" variant="overline">
      Advanced Supply Chain Visibility
    </Typography>

    <Typography size="medium" variant="overline">
      Advanced Supply Chain Visibility
    </Typography>

    <Typography size="small" variant="overline">
      Advanced Supply Chain Visibility
    </Typography>
  </Box>
);

export const Footnote = () => (
  <Box
    sx={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '14px',
    }}
  >
    <Typography size="medium" variant="footnote1">
      Advanced Supply Chain Visibility
    </Typography>
    <Typography size="medium" variant="footnote2">
      Advanced Supply Chain Visibility
    </Typography>

    <Typography size="small" variant="footnote1">
      Advanced Supply Chain Visibility
    </Typography>
    <Typography size="small" variant="footnote2">
      Advanced Supply Chain Visibility
    </Typography>
  </Box>
);
