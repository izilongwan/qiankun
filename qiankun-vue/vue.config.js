const { SUB } = process.env

const config = {
  devServer: {
    port: 5000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: 'vueApp',
      libraryTarget: 'umd',
    },
  },
}

SUB && Object.assign(config, {
  outputDir: '../qiankun-base/dist/subs/vue',
  publicPath: '/subs/vue',
})

module.exports = config
