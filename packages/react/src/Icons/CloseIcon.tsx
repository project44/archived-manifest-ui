import React from 'react';
import { Close } from '@manifest-ui/icons';

import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

export const CloseIcon = (props: IconProps) => {
  return <Icon as={Close} {...props} />;
};
