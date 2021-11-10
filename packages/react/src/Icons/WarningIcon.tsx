import React from 'react';
import { Warning } from '@manifest-ui/icons';

import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

export const WarningIcon = (props: IconProps) => {
  return <Icon as={Warning} {...props} />;
};
