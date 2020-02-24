const { resolve } = require('path')

module.exports = (options, context) => ({
  define () {
    const { position, audios, autoplay, shrinkMode, floatPosition, floatStyle} = options
    return {
      POSITION: position || {
        left: '10px',
        bottom: '10px',
        'z-index': '999999'
      },
      AUDIOS: audios,
      AUTOPLAY: autoplay || true, // 是否开启自动播放
      SHRINK_MODE: shrinkMode || 'float',
      FLOAT_POSITION: floatPosition || 'left',
      FLOAT_STYLE: floatStyle || {
        bottom: '200px'
      }
    }
  },
  name: '@vuepress-reco/vuepress-plugin-bgm-player',
  enhanceAppFiles: resolve(__dirname, './bin/enhanceAppFile.js'),
  globalUIComponents: 'BgMusic'
})
