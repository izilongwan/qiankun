const appName = require('./package.json').name;
const {resolve} = require('path')
const { SUB } = process.env

module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hot: true,
    compress: true,
  },

  output: {
    library: `angularApp`,
    libraryTarget: 'umd',
    ...SUB && {
      path: resolve(__dirname, '../dist/subs/angular'),
    },
  },
};
