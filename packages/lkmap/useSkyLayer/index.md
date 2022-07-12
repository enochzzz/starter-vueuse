---
category: LKMap
---

# useSkyLayer

实例化LKMap.SkyLayer, 创建天空。

## Usage

```js
import { useSkyLayer } from '@emguse/lkmap'
import { skyLayerOptions } from 'config'
// pinia
const mapStore = useMapStore()
// useMap
const {
  skyLayer,
  createSkyLayer,
  toggleSkyLayer
} = useSkyLayer()

watch(() => mapStore.mapLoaded, val => {
  if (val) {
    createSkyLayer(skyLayerOptions)
  }
}, {
  immediate: true
})

```

## Behavior

`useSkyLayer` 可以提供一个SkyLayer实例化对象，用户可以由此进行获取并进行相应的操作。`useSkyLayer` 会提供三个方法，`createSkyLayer`、`toggleSkyLayer`。分别为创建天空工具的方法，显示/隐藏天空。

> 注意`createSkyLayer`只需要在全局调用一次，避免重复实例化，这是不合理的。初始化后可以将skyLayer保存到pinia/vuex中，便于其他地方使用
