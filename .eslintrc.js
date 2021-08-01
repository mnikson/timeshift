module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jest'
  ],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'comma-dangle': ['error', 'never'],
    'react/prefer-stateless-function': 0,
    'padded-blocks': ['error', {
      blocks: 'never'
    }],
    'react/static-property-placement': 0,
    'react/jsx-curly-spacing': [2, 'always'],
    'no-underscore-dangle': 0,
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx']
    }],
    'react/forbid-prop-types': 0,
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    // When importing files you do not need to add file extensions for the following extensions
    'import/extensions': ['error', 'always', {
      js: 'never',
      jsx: 'never'
    }],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    // Allowing importing from dev deps (for stories and tests)
    'import/no-extraneous-dependencies': 'off',

    // http://eslint.org/docs/rules/no-plusplus
    // Allowing ++ on numbers
    'no-plusplus': 'off',

    // http://eslint.org/docs/rules/no-param-reassign
    // Cannot reassign function parameters but allowing modification
    'no-param-reassign': ['error', { props: false }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    // JSX props must be in alphabetical order
    // Disabled as this is creating too much noise in logs and is not being actively addressed
    'react/jsx-sort-props': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    // This was turned off for wc - but should be re-enabled eventually
    'react/no-unknown-property': ['off'],

    // http://eslint.org/docs/rules/no-multiple-empty-lines
    // Disallow more than 1 empty lines
    'no-multiple-empty-lines': [0],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    // Adding 'skipShapeProps' as the rule has issues with correctly handling PropTypes.shape
    'react/no-unused-prop-types': ['error', { skipShapeProps: true }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    // default props not required for optional values
    'react/require-default-props': 'off',

    // Allowing warning and error console logging
    'no-console': ['error', { allow: ['warn', 'error'] }],

    // All blocks must be wrapped in curly braces {}
    // Preventing if(condition) return;
    // https://eslint.org/docs/rules/curly
    curly: ['error', 'all'],

    'react/jsx-closing-bracket-location': 0,
    'react/jsx-one-expression-per-line': 0,
    'arrow-parens': ['error', 'as-needed'],
    'import/no-cycle': 0,
    'consistent-return': 0,
    'no-case-declarations': 0,
    'react/destructuring-assignment': 0,
    camelcase: 0,
    'arrow-body-style': 0
  }
};
