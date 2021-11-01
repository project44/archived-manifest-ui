import React from 'react';
import { ChevronLeft } from '@manifest-ui/icons';

import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

export const ChevronLeftIcon = (props: IconProps) => {
  return <Icon as={ChevronLeft} {...props} />;
};
