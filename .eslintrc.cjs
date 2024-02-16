module.exports = {
  env: {
    es8: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:nuxt/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
};
