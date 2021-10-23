import { flatten } from 'lodash';
import { Snippets } from 'playroom';

const req = require.context('../packages', true, /\.snippets\.tsx?$/);
export default flatten(
  req.keys().map((filename) => {
    const matches = filename.match(/([a-zA-Z]+)\.snippets\.tsx?$/);
    if (!matches) {
      return [];
    }

    const snippets = req(filename).snippets as Snippets;

    return snippets.map((snippet) => ({
      ...snippet,
      group: snippet.group || matches[1],
      code: snippet.code,
    }));
  }),
);
