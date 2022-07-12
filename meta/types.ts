interface BaseModule {
  name: string
  author?: string
  description?: string
  route?: string
}

export interface ModuleMainest extends BaseModule {
  children?: BaseModule[]
}
