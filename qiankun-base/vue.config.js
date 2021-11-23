const { join } = require('path');
const { SUB } = process.env

const config = {
  devServer: {
    contentBase: [join(__dirname, 'public'), join(__dirname, 'dist')],
  },

  pages: {
    index: {
      entry: './src/main.js',
      title: 'Apps',
    }
  }
}

SUB && Object.assign(config, {
  outputDir: '../dist/main',
  publicPath: '/main',
})

module.exports = config
