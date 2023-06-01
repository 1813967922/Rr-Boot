import { ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import { loadEnv } from 'vite'
import unocss from 'unocss/vite'
import { presetIcons, presetAttributify, presetUno } from 'unocss'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'
import externalGlobals from 'rollup-plugin-external-globals'

/**
 * unocss图标集
 * 1、不支持动态类名导入、动态路由不要使用
 * https://icones.js.org/collection/ep
 * https://icones.js.org/collection/material-symbols
 */

const pathResolve = (dir: string): any => {
    return resolve(__dirname, '.', dir)
}

// 打包时剔除以下依赖，改用CDN引入，需在index.html引入对应版本的依赖
const globals = externalGlobals({
    vue: 'vue',
    'vue-router': 'vue-router',
})

export default (config: ConfigEnv) => {
    return defineConfig({
        plugins: [
            vue(),
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
            unocss(),
            // 生成打包体积分析图
            visualizer({ open: true }),
        ],
        server: {
            port: 3200,
            open: true,
            base: './ ',
            proxy: {
                '/api': {
                    target: loadEnv(config.mode, process.cwd()).VITE_BASE_URL,
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/api/, ''),
                },
            },
        },
        resolve: {
            alias: [
                {
                    find: '/@',
                    replacement: pathResolve('./src/'),
                },
                {
                    find: 'assets',
                    replacement: pathResolve('./src/assets'),
                },
            ],
        },
        build: {
            rollupOptions: {
                external: ['vue', 'vue-router'],
                plugins: [
                    // 配置文件压缩
                    viteCompression({
                        verbose: true, // 是否在控制台中输出压缩结果
                        disable: false,
                        threshold: 10240, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
                        algorithm: 'gzip', // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
                        ext: '.gz',
                        deleteOriginFile: true, // 源文件压缩后是否删除(我为了看压缩后的效果，先选择了true)
                    }),
                    globals,
                ],
                output: {
                    manualChunks: {
                        elementPlusIconsVue: ['@element-plus/icons-vue'],
                    },
                },
            },
        },
    })
}
