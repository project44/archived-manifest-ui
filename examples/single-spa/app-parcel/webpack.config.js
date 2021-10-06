const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'manifest-ui',
    projectName: 'app-parcel',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: [
      '@manifest-ui/react',
      '@chakra-ui/react',
      '@emotion/react',
      '@emotion/styled',
      'framer-motion',
    ],
  });
};
