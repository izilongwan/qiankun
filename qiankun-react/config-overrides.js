const { resolve } = require('path')
const { SUB } = process.env

module.exports = {
  webpack: config => {
    config.output.library = 'reactApp'
    config.output.libraryTarget = 'umd'
    SUB && (config.output.path = resolve(__dirname, '../dist/subs/react'))
    config.output.publicPath = process.env.NODE_ENV === 'production'
      ? '/subs/react/'
      : 'http://localhost:9000/'
    return config
  },
  devServer: (configFunction) => {
    return function(proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost)
      config.headers = {
        'Access-Control-Allow-Origin': '*'
      }
      return config
    }
  }
}
