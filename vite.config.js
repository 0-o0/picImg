import { defineConfig, loadEnv } from 'vite'
import { plugins, build, server, resolveC, cssStyl } from './src/config'
export default ({ mode }) => {
  function getEnv(key) { // 定义获取环境变量的方法
    return loadEnv(mode, process.cwd(), '')[key] // 第三个参数非常重要，下面有详解
  }
  return defineConfig({
    base: getEnv('VUE_APP_PUBLICPATH'), // 读取环境变量
    publicDir: 'public',
    css: cssStyl,
    optimizeDeps: {
      exclude: ['__INDEX__'] // 排除 __INDEX__
    },
    plugins: plugins(mode),
    build,
    envPrefix: ['VUE_APP_'], // 很重要
    resolve: resolveC,
    server
  })
}
