const CracoAntDesignPlugin = require('craco-antd')
const path = require('path')

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#1DA57A',
        },
      },
    },
  ],
  webpack: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
}
