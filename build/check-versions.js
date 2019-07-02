// 该文件用于检测node和npm的版本，实现版本依赖
'use strict'
const chalk = require('chalk') // 可以给输出信息，添加背景，改变字体颜色等
const semver = require('semver') // node 的版本检查工具
const packageConfig = require('../package.json')
// Shelljs是基于node的一层命令封装插件，让前端开发者可以不依赖linux也不依赖类似于cmder的转换工具，而是直接在javascript代码中编写shell命令实现功能。
const shell = require('shelljs')

function exec (cmd) {
  // 执行命令并将输出结果返回
  return require('child_process').execSync(cmd).toString().trim()
}

const versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version), // 返回纯净的版本，semver.clean('  =v1.2.3   ') === '1.2.3'
    versionRequirement: packageConfig.engines.node
  }
]

if (shell.which('npm')) { // shell.which 判断该命令是否可执行，返回该命令的绝对地址
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = function () {
  const warnings = []

  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i]

    // semver.satisfies('1.2.3', '1.x || >=2.5.0 || 5.0.0 - 7.2.3') // true
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()

    for (let i = 0; i < warnings.length; i++) {
      const warning = warnings[i]
      console.log('  ' + warning)
    }

    console.log()
    process.exit(1) // 退出nodejs进程
  }
}
