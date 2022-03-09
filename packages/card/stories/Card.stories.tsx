import * as React from 'react';
import { Card, CardBody, CardFooter, CardHeader, CardProps } from '../src';
import { Button } from '@manifest-ui/button';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = (args: CardProps) => (
  <Card {...args}>
    <CardHeader>Title</CardHeader>
    <CardBody>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </CardBody>
    <CardFooter>
      <Button colorTheme="neutral" sx={{ mr: 3 }} variant="outlined">
        Cancel
      </Button>
      <Button variant="filled">Submit</Button>
    </CardFooter>
  </Card>
);

Default.args = {
  children: 'Button',
};
