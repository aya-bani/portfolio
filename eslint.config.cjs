
// eslint.config.cjs
// eslint.config.cjs
const globals = require("globals"); // Use CommonJS require syntax
module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:tailwindcss/recommended',
  ],
  globals: {
    ...globals,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'tailwindcss/classnames-order': 'warn',
    'no-unused-vars': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
