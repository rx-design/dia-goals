module.exports = {
  root: true,
  extends: [
    '@nuxt/eslint-config',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
  },
  rules: {
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'never',
    ],
  },
  ignorePatterns: [
    'presets/*',
  ],
}
