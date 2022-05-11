module.exports = {
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@next/eslint-plugin-next', 'prettier'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
