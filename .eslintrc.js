module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 11,
  },
  rules: {
    'no-var': 'error',
    curly: 'error',
    eqeqeq: 'error',
    'no-multi-spaces': 'error',
    'require-await': 'error',
    'no-use-before-define': 'error',
    'prefer-const': 'error',
    'no-multiple-empty-lines': 'error',
    semi: 'error',
    'space-before-blocks': 'error',
  },
};
