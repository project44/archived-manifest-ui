module.exports = {
  presets: [
    '@babel/preset-typescript',
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        exclude: [
          '@babel/plugin-transform-regenerator',
          '@babel/plugin-transform-async-to-generator',
        ],
        loose: false,
        modules: 'auto',
        shippedProposals: true,
        targets: { node: 'current' },
        useBuiltIns: false,
      },
    ],
  ],
};
