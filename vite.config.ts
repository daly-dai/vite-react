import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'
import { alias } from './app.config'
import eslint from 'vite-plugin-eslint'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        // modifyVars: {
        //   hack: `true; @import (reference) "${path.resolve("src/assets/css/base.less")}";`,
        // },
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    react({
      include: ['**/*.tsx']
    }),
    vitePluginImp({
      libList: [
        {
          libName: 'lodash',
          libDirectory: '',
          camel2DashComponentName: false
        },
        {
          libName: 'antd',
          style(name) {
            // use less
            return `antd/es/${name}/style/index.js`
          }
        }
      ]
    }),
    eslint({
      include: ['src/**/*.js', 'src/**/*.jsx', 'src/*.ts', 'src/*.tsx']
    }),
  ],
  publicDir: 'assets',
  server: {
    host: true
  },
  base: "./", // 设置打包路径
  resolve: {
    alias,
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  }
})
