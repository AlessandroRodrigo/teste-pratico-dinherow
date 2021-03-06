module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'prettier',
    'prettier/vue'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'vue',
    'prettier'
  ],
  rules: {
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "no-param-reassign": "off"
  },
};
