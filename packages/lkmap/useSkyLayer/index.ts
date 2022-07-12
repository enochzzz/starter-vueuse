import { Ref, ref } from 'vue'
import { MapLk, SkyLayer, Common, LngLat, createLKMapLayer, SKY_LAYER } from "@emguse/shared"

export interface SkyLayerOptions {
  map: MapLk,
  type?: string
  gradientColor?: Common
  gradientCenter?: Common
  gradientRadius?: number
  atmosphereTime?: any
  atmosphereCenter?: LngLat
  atmosphereIntensity?: number
  atmosphereHaloColor?: string
  atmosphereColor?: string
  opacity?: any
}

interface UseSkyLayerReturn {
  skyLayer: Ref<SkyLayer | null>
  createSkyLayer: (ops: SkyLayerOptions) => void
  toggleSkyLayer: (skyLayer: SkyLayer, flag: boolean) => void
}

/**
 * 实例化SkyLayer
 * 提供 skyLayer 实例化对象
 * 提供 创建/显示隐藏方法
 * @returns 
 * author: enoch
 */
export function useSkyLayer(): UseSkyLayerReturn {
  const skyLayer: Ref<SkyLayer | null> = ref(null)

  /**
   * 实例化SkyLayer 
   * @param options 
   */
  function createSkyLayer(options: SkyLayerOptions) {
    skyLayer.value = createLKMapLayer(SKY_LAYER, options);
  }

  /**
   * 显示/隐藏skyLayer
   * @param flag 
   */
  function toggleSkyLayer(skyLayer: SkyLayer, flag: boolean) {
    flag ? skyLayer.value?.show() : skyLayer.value?.hide()
  }

  return {
    skyLayer,
    createSkyLayer,
    toggleSkyLayer
  }
}
