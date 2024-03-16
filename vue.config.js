// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/DeployVueTest.io/' // Thay tên repository của các bạn vào đây nhé
    : '/'
}