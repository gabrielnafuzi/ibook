module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    semi: [2, 'never'],
    'comma-dangle': 'never',
    'no-extra-boolean-cast': 0,
    'no-console': 1,
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'prettier/prettier': ['error', { semi: false }]
  }
}
