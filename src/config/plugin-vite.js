import envCompatible from 'vite-plugin-env-compatible'
import { createVuePlugin as vue } from 'vite-plugin-vue2'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import compressPlugin from 'vite-plugin-compression'
import eslintPlugin from 'vite-plugin-eslint'
import legacy from '@vitejs/plugin-legacy'
// import importToCDN from 'vite-plugin-cdn-import'
// import { cdn } from './index'
const plugins = function(mode) {
  const isPro = mode === 'pro'
  const transformIndexHtml = (code) => {
    return code.replace(/__INDEX__/, `${isPro ? '/src/main.prod.js' : '/src/main.js'}`) // 生产环境
  }
  return [{
    name: 'demo-transform',
    enforce: 'pre',
    // vite build is production will not invoke `transformIndexHtml`
    transform(code, id) {
      if (id.endsWith('.html')) {
        return { code: transformIndexHtml(code), map: null }
      }
    },
    transformIndexHtml
  },
  vue(),
  envCompatible(),
  viteCommonjs(),
  compressPlugin({
    ext: '.gz',
    deleteOriginFile: false, // 是否删除原始文件
    threshold: 10240, // 压缩前最小文件大小
    algorithm: 'gzip' // 压缩算法
  }),
  eslintPlugin({ // eslint插件，开发时存在eslint错误组织构建并提示
    cache: false
    // throwOnError: !isPro // 生产环境打包不抛出异常
  }),
  legacy({
    targets: ['ie >= 11'],
    additionalLegacyPolyfills: ['regenerator-runtime/runtime']
  })
  // importToCDN({
  //   modules: cdn
  // })
  ]
}

export default plugins
