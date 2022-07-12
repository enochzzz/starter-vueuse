import { modules } from '../../meta/modules'
import type { ModuleMainest } from '../../meta/types'

export default {
  lang: 'en-US', // en-US  zh-CN
  title: 'pkg-name',
  description: 'docs for pkg-name.',
  appearance: true,
  base: '/base/',
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'pkg-name',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/enochzzz' },
    ],
    nav: getSidebarByModules(modules),
    sidebar: getSidebarByModules(modules),
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },
    head: [
      ['link', { rel: 'icon', href: '/favicon-32x32.png', type: 'image/png' }],
      ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ],
    lastUpdatedText: 'Updated Date',
  },
}

interface BaseSidebar {
  text: string
  link?: string
}

interface Sidebar extends BaseSidebar {
  items?: BaseSidebar[]
}

export function getSidebarByModules(modules: ModuleMainest[]) {
  const result: Sidebar[] = []
  modules.forEach((i) => {
    const item: Sidebar = {
      text: '',
    }
    item.text = i.name
    if (i.children)
      item.items = getSidebarByModules(i.children)

    else
      item.link = i.route

    result.push(item)
  })
  return result
}
