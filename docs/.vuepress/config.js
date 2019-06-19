module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VueDynamicForm',
      description: 'Don\'t want to write simple form code any more? Try vue-dynamic-form'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VueDynamicForm',
      description: '不想再写简单的表单代码了？试试 vue-dynamic-form'
    }
  },
  themeConfig: {
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        sidebar: [
          { title: 'Guide', collapsable: false, children: ['/guide/', '/getting-started/'] },
          { title: 'API', collapsable: false, children: ['/api/dynamic-form/', '/api/descriptor/'] }
        ]
      },
      '/zh/': {
        selectText: '语言',
        label: '简体中文',
        sidebar: [
          { title: '指南', collapsable: false, children: ['/zh/guide/', '/zh/getting-started/'] },
          { title: 'API', collapsable: false, children: ['/zh/api/dynamic-form/', '/zh/api/descriptor/'] }
        ]
      }
    },
    nav: [
      { text: 'GitHub', link: 'https://github.com/chenquincy/vue-dynamic-form' }
    ]
  }
}