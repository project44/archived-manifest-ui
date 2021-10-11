import React from 'react';
import { Flex, FlexProps, useColorModeValue } from '@manifest-ui/react';

const Card = (props: FlexProps) => {
  return <Flex bg={useColorModeValue('white', 'gray.600')} p="6" {...props} />;
};

export default Card;
