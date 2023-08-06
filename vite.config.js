import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//使用了自动配置导入element-plus的连个插件更改主题使用
export default defineConfig({
  plugins: [
    vue(),
    //配置element自动导入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
        // 配置elementPlus采用sass样式配色系统
    resolvers: [ElementPlusResolver({ importStyle: "sass" })],   //第一步 配置elementPlus采用sass样式配色系统
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
   // 自动导入定制化样式文件进行样式覆盖
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`  //第二步导入写好的styles/element/insex.scss文件中的内容
      },
    },
  },

})
