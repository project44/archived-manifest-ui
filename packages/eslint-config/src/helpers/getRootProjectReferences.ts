import { ProjectReference } from 'typescript';

import { getRootTSConfig } from './getRootTSConfig';

export function getRootProjectReferences(): ProjectReference[] | undefined {
  return getRootTSConfig().references;
}
