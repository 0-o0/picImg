const dataId = Date.now()
module.exports = {
  globDirectory: 'dist',
  globPatterns: [
    '**/*.{css,html,js}'
  ],
  cacheId: dataId + '',
  cleanupOutdatedCaches: true,
  swDest: 'dist/sw.js',
  ignoreURLParametersMatching: [
    /^utm_/,
    /^fbclid$/
  ],
  skipWaiting: true,
  clientsClaim: true,
  sourcemap: false
}
