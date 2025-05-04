const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/mnhaekklipning-website/',
  outputDir: 'docs',
  assetsDir: '',
  indexPath: '../index.html'
})
