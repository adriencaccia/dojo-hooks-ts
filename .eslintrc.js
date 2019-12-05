module.exports = {
  'extends': [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'plugins': [
    '@typescript-eslint',
    'react-hooks',
  ],
  'settings': {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      'typescript': {},
    },
  },
  'rules': {
    '@typescript-eslint/indent': [2, 2],
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never']
  }
}
