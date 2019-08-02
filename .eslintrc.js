module.exports = {
  extends: ['prettier'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      spread: true,
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
  },
}
