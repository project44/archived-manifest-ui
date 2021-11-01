import React from 'react';
import { Add } from '@manifest-ui/icons';

import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

export const AddIcon = (props: IconProps) => {
  return <Icon as={Add} {...props} />;
};
