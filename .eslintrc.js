module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {},
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'error',
    'no-unused-vars': 'error',
    'no-control-regex': 'off',
    'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: true }],
    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreImports: true
      }
    ],
    'no-async-promise-executor': 'warn',
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-var-requires': 'off'
  }
};
