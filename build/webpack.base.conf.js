'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  // __dirname表示当前文件所在目录的绝对路径， __filename表示当前文件的绝对路径
  // path.join() 返回这一系列路径的组合。如果拼接 ''  或者 '.',表示当前目录，如果拼接 '..' 或者 '../'表示当前目录的父级
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),  // 所有的错误在最后报告，不用从头开始看。点击文件报错信息可以打开文件。
    emitWarning: !config.dev.showEslintErrorsInOverlay // Loader will always return warnings if option is set to true
  }
})

module.exports = {
  context: path.resolve(__dirname, '../'), // context 是webpack entry的上下文。默认使用当前文件所在的目录。
  entry: {
    // Babel默认只转换新的JavaScript句法，而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。
    // 如果想让这些方法运行，就需要使用babel-polyfill
    // 方法一：在webpack中引用。放在entry的最前面。这样polyfill将会被打包进项目，代码体积会变大
    // 方法二：在入口文件js的顶部，import "babel-polyfill"
    // app: ['babel-polyfill', './src/main.js']
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'], // 自动解析这些扩展，能够使用户在引入模块时不带扩展：import File from '../path/to/file'
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: { // 这些选项可以配置是否 polyfill 或 mock 某些 Node.js 全局变量和模块
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
