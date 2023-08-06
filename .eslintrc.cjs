/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',   //通过这种配置方式，可以在开发环境下自由使用 console 和 debugger 进行调试，\
    //而在生产环境下，这些语句会被标记为警告，提醒开发者避免将它们包含在最终发布的代码中，以避免泄露敏感信息或影响性能。
    // 忽略个别组件命名规则
    "vue/multi-word-component-names": ["error",{
      "ignores": ["index"]
   }]
}
}
