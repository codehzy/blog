// ts 侧边栏
const getTsSidebar = () => {
  return [
    {
      text: '基础知识',
      children: [
        { text: '基础', link: '/ts/basics' },
        { text: '坑点记录', link: '/ts/bugNote' }
      ]
    }
  ]
}

// vue侧边栏
const getVueSidebar = () => {
  return [
    {
      text: '基础知识',
      children: [
        { text: '基础', link: '/vue/baseVue3' },
        { text: '坑点记录', link: '/vue/vue3BugNote' }
      ]
    }
  ]
}

export { getTsSidebar, getVueSidebar }
