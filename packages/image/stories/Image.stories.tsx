import * as React from 'react';
import { Image, ImageProps } from '../src';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = (args: ImageProps) => <Image {...args} />;

Default.args = {
  alt: 'Carrier Network',
  src: 'https://project44.imgix.net/half/CarrierNetwork.jpg?auto=format&crop=focalpoint&domain=project44.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&h=1066&ixlib=php-3.3.1&q=100&w=1600&s=7426f0bc04fc22a7c4f6c06841004968',
};
