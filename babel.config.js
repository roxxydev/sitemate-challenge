module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '~': './src'
          }
        },
      ]
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    }
  }
}
