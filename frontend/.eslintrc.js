/* eslint-env node */
module.exports = {
 env: {
  browser: true,
  es2021: true,
 },
 extends: [
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:@typescript-eslint/recommended',
 ],
 parser: '@typescript-eslint/parser',
 parserOptions: {
  ecmaFeatures: {
   jsx: true,
  },
  ecmaVersion: 'latest',
  sourceType: 'module',
 },
 plugins: ['react', '@typescript-eslint'],
 ignorePatterns: ['public/*'],
 settings: {
  react: {
   version: 'detect',
  },
 },
 rules: {
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/ban-ts-ignore': 'off',
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  quotes: ['error', 'single'],
  semi: ['error', 'always'],
  'no-trailing-spaces': 'error',
  'object-curly-spacing': ['error', 'always'],
  'arrow-spacing': ['error', { before: true, after: true }],
 },
};
