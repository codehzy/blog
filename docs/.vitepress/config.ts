import { defineConfig } from 'vitepress'
const { getTsSidebar, getVueSidebar, getNodeSideBar } = require('./sidebar')

export default defineConfig({
  base: '/blog',
  title: '我的博客',
  description: '我的vitepress博客',
  head: [
    // 改变title的图标
    [
      'link',
      {
        rel: 'icon',
        href: 'img/logo.svg' //图片放在public文件夹下
      }
    ]
  ],
  themeConfig: {
    repo: 'https://github.com/codehzy',
    // 头部导航
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '关于',
        link: '/about/'
      },
      {
        text: '前端技术',
        items: [
          { text: 'TS', link: '/ts/basics', activeMatch: '^/ts/' },
          { text: 'vue', link: '/vue/baseVue3' },
          { text: 'node', link: '/node/nodeBase' }
        ]
      }
    ],
    // 侧边导航
    sidebar: {
      '/ts/': getTsSidebar(),
      '/vue/': getVueSidebar(),
      '/node/': getNodeSideBar()
    }
  }
})
