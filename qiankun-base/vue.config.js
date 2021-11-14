const { join } = require('path');
const { SUB } = process.env

const config = {
  devServer: {
    contentBase: [join(__dirname, 'public'), join(__dirname, 'dist')],
  },
}

SUB && Object.assign(config, {
  outputDir: 'dist/main',
  publicPath: 'dist/main',
})

module.exports = config
