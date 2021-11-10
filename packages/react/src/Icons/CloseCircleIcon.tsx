import React from 'react';
import { CloseCircle } from '@manifest-ui/icons';

import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

export const CloseCircleIcon = (props: IconProps) => {
  return <Icon as={CloseCircle} {...props} />;
};
