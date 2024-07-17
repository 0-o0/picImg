module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'pro' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'pro' ? 'warn' : 'off',
    'space-before-function-paren': 0
  }
}
