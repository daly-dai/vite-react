import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'
import { alias } from './app.config'
import eslint from 'vite-plugin-eslint'
// svg图片导入
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

import proxy from './config/proxy-self'

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    react({
      include: ['**/*.tsx'],
      exclude: /\.stories\.(t|j)sx?$/,
    }),
    tsconfigPaths(),
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
    svgr()
  ],
  publicDir: 'assets',
  server: {
    host: true,
    cors: true, // 允许跨域
    proxy: proxy,
  },
  base: "./", // 设置打包路径
  resolve: {
    alias,
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  build: {
    terserOptions: {
      compress: {
        // 清除console。log
        drop_console: true,
        // 清除debugger
        drop_debugger: true,
      },
    },
    assetsInlineLimit: 2000,
    reportCompressedSize: false, // 启用/禁用 gzip 压缩大小报告。
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      }
    }
  }
})
