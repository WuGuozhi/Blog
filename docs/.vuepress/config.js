module.exports = {
  title: "latte and cat",
  description: 'study programs and record life',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    huawei: false,
    themePicker: {
      colorName1: '#0033FF', // 极浓海蓝
      colorName2: '#8B00FF', // 紫罗兰色
      colorName3: '#00BFFF', // 深天蓝
      colorName4: '#FF8C00' // 暗橙
    },
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'Notes', link: '/note/', icon: 'reco-document' },
      { text: 'TimeLine', link: '/timeLine/', icon: 'reco-date' },
      { text: 'PhotoAlbum', link: 'http://photo.smallsunnyfox.com/', icon: 'reco-blog'},
      { text: 'Contact',
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/smallsunnyfox', icon: 'reco-github' },
        ]
      }
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
    logo: '/head.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebarDepth: 1,
    displayAllHeaders: false,
    sidebar: {
      '/note/': [
        {
          title: 'HTML5',
          collapsable: false,
          children: [
            'html5/HTML5的语义元素',
            'html5/HTML5多媒体标签',
            'html5/HTML5表单元素',
            'html5/HTML5中的API',
            'html5/Canvas'
          ]
        },
        {
          title: 'CSS',
          collapsable: false,
          children: [
            'css/css3新特性',
            'css/css3Flip'
          ]
        },
        {
          title: '前端单元测试',
          collapsable: false,
          children: [
            'fe-unit-test/chai',
            'fe-unit-test/mocha',
            'fe-unit-test/vueTestUtils'
          ]
        }
      ]
    },
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: '橘子',
    // 备案号
    record: '豫ICP备19035192号',
    // 项目开始时间
    startYear: '2019',
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['121023'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    valineConfig: {
      appId: 'XDwlSXS2pD137bPrPpwQaqqD-gzGzoHsz',// your appId
      appKey: 'CQ8FKrMUP76LwycPcKlDoRqV', // your appKey
      placeholder: '是时候展现真正的技术了',
      avatar: 'wavatar',
      serverUrl: 'https://leanserver.smallsunnyfox.com'
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart']
}  