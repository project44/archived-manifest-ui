const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'single-spa-example',
    projectName: 'app-parcel',
    webpackConfigEnv,
    argv,
  });

  const config = merge(defaultConfig, {
    externals: ['@emotion/react', '@emotion/styled', 'framer-motion'],
  });

  return config;
};
