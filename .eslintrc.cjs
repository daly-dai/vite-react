module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  settings: {
    react: {
      version: '999.999.999'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // 组件传参校验
    'react/prop-types': 0,
    // 组件默认名称
    'react/display-name': 'off',
    // 允许使用any类型
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': 0, //变量声明未被使用校验
    'linebreak-style': [0, 'error', 'windows'],
    'react/jsx-uses-react': 2
    // semi: ['always']
  }
}
