'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  // 按需加载的话需要配置chunkFilename这样才会生成正确的名字，默认是0.js, 1.js, 即 '[id].js'
  output: {
    chunkFilename: '[name].js'
  },
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool, // 此选项控制是否生成，以及如何生成 source map。一般开发用eval-source-map，上线用source-map

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning', //控制台显示什么级别的log，主要是针对devServer的log。并不是你自己代码中的log
    historyApiFallback: { // 任意的 404 响应都可能需要被替代为 index.html。如果找不到路由就返回默认首页。
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true, // 热更新
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true, // 一切服务都启用gzip压缩
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser, // 自动打开浏览器
    overlay: config.dev.errorOverlay // Shows a full-screen overlay in the browser when there are compiler errors or warnings
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath, // 文件服务，此路径下的文件可以被访问到。推荐跟output.publicPath使用一样，这样打包后的脚本就可以直接在devserver上run
    proxy: config.dev.proxyTable, //代理请求
    quiet: true, // necessary for FriendlyErrorsPlugin  //  webpack 的错误或警告在控制台不可见。
    watchOptions: { // webpack基于文件系统来获取文件的改变。在某些场景下，是不起作用的。 比如，当使用NFS或Vagrant。针对这种情况使用poll轮询进行监控。
      poll: config.dev.poll,
    }
  },
  plugins: [
    // DefinePlugin 允许创建一个在编译时可以配置的全局常量
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    // 模块热替换插件
    new webpack.HotModuleReplacementPlugin(),
    // 当开启 HMR 的时候使用该插件会显示模块的相对路径
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    // 在编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段。这样可以确保输出资源不会包含错误。
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    // 将打包的脚本注入到html文件中
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  // portfinder.getPort获取当前可用的port, 从basePort开始搜索。
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      // FriendlyErrorsPlugin能够更好在终端看到webapck运行的警告和错误。devServer中quiet选项设置为true来关闭所有错误日志记录。
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        // 运行成功时的输出信息
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        // 运行失败时的通知
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
