module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'prettier',
    'eslint-plugin-import-helpers',
    '@typescript-eslint'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'none',
        arrowParens: 'always',
        endOfLine: 'auto'
      }
    ],
    camelcase: 'off',
    indent: 'off',
    'multiline-ternary': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    semi: ['error', 'always'],
    'space-before-function-paren': 'off',
    'import/no-unresolved': 'error',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', '/^@/', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts']
    }
  }
};
