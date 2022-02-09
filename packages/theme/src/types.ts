import { Theme } from '@manifest-ui/styled-system';

export type ThemeInput = { [P in keyof Theme]?: Partial<Theme[P]> };
