// 这是一个 react tailwindcss vite 项目的vite.config.js的模版

// 包含
// resolve下的alias指定src路径的映射
// base:'/mentor_first/'指定端口根路径
// build下的outDir指定项目打包输出目录
// tailwindcss的配置(使用时需要在css文件中的第一行声明:@import "tailwindcss";)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src')
    }
  },
  base:'/mentor_first/',
  build:{
    outDir:'../../docs'
  }
})
