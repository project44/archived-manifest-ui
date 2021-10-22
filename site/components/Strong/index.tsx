import React from 'react';
import { Text, TextProps } from '@manifest-ui/react';

const Strong = (props: TextProps) => (
  <Text as="strong" fontWeight="bold" {...props} />
);

export default Strong;
