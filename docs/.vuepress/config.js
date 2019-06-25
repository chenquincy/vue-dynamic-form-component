module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VueDynamicForm',
      description: 'Vue dynamic nested form component. Support nested Object/Hashmap/Array.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VueDynamicForm',
      description: 'Vue动态嵌套表单组件，支持嵌套对象/Hashmap/数组'
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
          { title: 'API', collapsable: false, children: ['/api/dynamic-form/', '/api/descriptors/'] }
        ]
      },
      '/zh/': {
        selectText: '语言',
        label: '简体中文',
        sidebar: [
          { title: '指南', collapsable: false, children: ['/zh/guide/', '/zh/getting-started/'] },
          { title: 'API', collapsable: false, children: ['/zh/api/dynamic-form/', '/zh/api/descriptors/'] }
        ]
      }
    },
    nav: [
      { text: 'GitHub', link: 'https://github.com/chenquincy/vue-dynamic-form-component' }
    ]
  }
}