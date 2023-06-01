export default {
  title: 'VitePress1',
  description: 'Just playing around.',
  // 最后更新
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'My Custom Title',
    logo: '../logo.svg',
    // 搜索
    algolia: {
      appId: '...',
      apiKey: '...',
      indexName: '...'
    },
    // 导航栏
    nav: [
      { text: '首页', link: '/index' },
      { text: '介绍', link: '/pages/introduce/index' },
    ],
    // 侧栏
    sidebar: [
      {
        text: '介绍',
        items: [
          { text: 'Introduction', link: '/pages/introduce/index' },
        ]
      }
    ],
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
}
