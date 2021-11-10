import React from 'react';
import { ChevronRight } from '@manifest-ui/icons';

import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

export const ChevronRightIcon = (props: IconProps) => {
  return <Icon as={ChevronRight} {...props} />;
};
