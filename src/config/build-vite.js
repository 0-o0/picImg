const build = {
  sourcemap: false,
  assetsDir: 'dist',
  minify: 'terser',
  assetsInlineLimit: 4096,
  rollupOptions: {
    // input: pageEntry, // 入口配置
    output: {
      chunkFileNames: 'js/[name]-[hash].js',
      entryFileNames: 'js/[name]-[hash].js',
      assetFileNames: '[ext]/[name]-[hash].[ext]',
    }
  },
  terserOptions: {
    compress: {
      // 生产环境时移除console.log()
      drop_console: true,
      drop_debugger: true
    }
  }
}
export default build
