module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
    'jest/globals': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'settings': {
    'react': {
      'version': 'detect',
      'flowVersion': '0.53'
    },
    'propWrapperFunctions': [
      'forbidExtraProps',
      {'property': 'freeze', 'object': 'Object'},
      {'property': 'myFavoriteWrapper'}
    ],
    'linkComponents': [
      'Hyperlink',
      {'name': 'Link', 'linkAttribute': 'to'}
    ]
  },
  'plugins': [ 'react', 'react-hooks', 'jest' ],
  'ignorePatterns': ['**/src/packages/*.js', '**/build/*.js'],
  'rules': {
    // generic
    'eqeqeq': ['error', 'always'],
    'semi': ['warn', 'never'],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true, 'avoidEscape': true }],
    'jsx-quotes': 1,
    'no-trailing-spaces': 2,
    'no-unused-vars': ['warn', { 'varsIgnorePattern': '_', 'argsIgnorePattern': '_' }],
    'indent': ['warn', 2],
    'no-dupe-keys': 1,
    // react
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-curly-spacing': 1,
    'react/no-unknown-property': 2,
    'react/prop-types': 0, // TODO
    // ignore
    'react/display-name': 0,
    'react/no-unescaped-entities': 0,
    // other
    'import/prefer-default-export': 2,
    'import/no-duplicates': 2,
    'import/no-unresolved': 0,
  }
}
