module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../packages/**/*.stories.mdx', '../packages/**/*.stories.@(js|jsx|ts|tsx)'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
      },
      shouldExtractLiteralValuesFromEnum: true,
    },
  },
};
