import type { ModuleMainest } from './types'

export const modules: ModuleMainest[] = [
  {
    name: 'guide',
    description: 'this is guide',
    author: 'enoch <https://github.com/enochzzz>',
    children: [
      {
        name: 'guide',
        route: '/guide/',
      },
    ],
  },
  {
    name: 'lkmap',
    description: 'this is lkmap',
    author: 'enoch <https://github.com/enochzzz>',
    children: [
      {
        name: 'useMap',
        route: '/lkmap/useMap/',
      },
      {
        name: 'useSkyLayer',
        route: '/lkmap/useSkyLayer/',
      },
    ],
  },
  {
    name: 'mapvgl',
    description: 'this is mapvgl',
    author: 'enoch <https://github.com/encozzz>',
    children: [
    ],
  },
]
