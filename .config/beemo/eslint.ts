export default {
  rules: {
    // We dont always need an expect statement for a11y testing.
    'jest/expect-expect': 'off',
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],
  },
};
