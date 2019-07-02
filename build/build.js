'use strict'
require('./check-versions')() // check node 和 npm 的版本号

process.env.NODE_ENV = 'production'

const ora = require('ora') // 控制台显示loading效果的插件
const rm = require('rimraf') // The UNIX command rm -rf for node. 并提供回调函数
const path = require('path')
const chalk = require('chalk') // 可以给输出信息，添加背景，改变字体颜色等
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start() // 开始loading

//先删除dist文件再去重新build
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => { // stats，是webpack打包的一个状态
    spinner.stop()
    if (err) throw err
    // process.stdout 输出流
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
