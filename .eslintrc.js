module.exports = {
  env: {
    es2021: true,
    node: true,
    mocha: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {}
}