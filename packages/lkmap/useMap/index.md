---
category: LKMap
---

# useMap

实例化LKMap.Map, 创建地图。

## Usage

```js
import { useMap } from '@emguse/lkmap'
import { mapOptions } from 'config'
// pinia
const mapStore = useMapStore()
// useMap
const {
  maplk,
  createMap,
  handleOnEventForMap,
  handleOffEventForMap
} = useMap()

const handleMapLoad = () => {
  mapStore.setMap()
}

onMounted(() => {
  createMap(mapOptions)
  handleOnEventForMap(maplk.value, 'load', handleMapLoad)
}),

```

## Behavior

`useMap` 可以提供一个map实例化对象，用户可以由此进行获取并进行相应的操作。`useMap` 会提供三个方法，`createMap`、`handleOnEventForMap`、`handleOffEventForMap`。分别为创建地图的方法，给当前地图绑定相应事件、解绑相应事件。

> 注意`createMap`只需要在全局生成地图时调用一次，避免重复实例化Map，这是不合理的。初始化后可以将地图实例化对象保存到pinia/vuex中，便于其他地方使用
