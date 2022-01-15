module.exports = {
  // 默认情况下，ESLint会在所有父级组件中寻找配置文件，一直到根目录。ESLint一旦发现配置文件中有   "root": true，它就会停止在父级目录中寻找。
  root: true,
  parserOptions: {
    // 对Babel解析器的包装使其与 ESLint 兼容。
    parser: 'babel-eslint',
    // 代码是 ECMAScript 模块
    sourceType: 'module',
    ecmaVersion: 2020
  },
  env: {
     // 预定义的全局变量，这里是浏览器环境
    browser: true,
    node: true,
    es6: true,
    'vue/setup-compiler-macros': true
  },
  // 扩展风格
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  // 规则的细节请到ESLint官方网站查看http://eslint.org/docs/rules/
  rules: {
    "vue/no-unused-components": "off",
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
}
