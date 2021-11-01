import React from 'react';
import { Star } from '@manifest-ui/icons';

import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

export const StarIcon = (props: IconProps) => {
  return <Icon as={Star} {...props} />;
};
