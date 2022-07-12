import { Bounds, createLKMapLayer, FitBoundsOptions, LngLat, MapLk, MAP } from "@emguse/shared"
import { ref, Ref } from 'vue'

export interface MapOptions {
  center: LngLat
  zoom?: number
  style?: string
  trackResize?: boolean
  dragRotate?: boolean
  dragPan?: boolean
  scrollZoom?: boolean
  doubleClickZoom?: boolean
  touchZoomRotate?: boolean
  keyboard?: boolean
  minZoom?: number
  maxZoom?: number
  maxBounds?: Bounds
  bounds?: Bounds
  fitBoundsOptions?: FitBoundsOptions
  bearing?: number
  pitch?: number
  antialias?: boolean
  sky?: boolean
  fog?: boolean
  isHotspot?: boolean
  isHotspotActive?: boolean
}

interface UseMapReturn {
  maplk: Ref<MapLk | null>
  createMap: (options: MapOptions) => void
  handleOnEventForMap: (map: MapLk, event: string, callback: (e?: any) => void) => void
  handleOffEventForMap: (map: MapLk, event: string, callback: (e?: any) => void) => void
}

/**
 * 实例化Map类，生成地图
 * 提供map实例化对象
 * 提供map事件绑定/解绑方法
 * @returns 
 * author: enoch
 */
export function useMap(): UseMapReturn {
  const maplk: Ref<MapLk | null> = ref(null)

  function createMap(options: MapOptions) {
    maplk.value = createLKMapLayer(MAP, options);
  }

  /**
   * 为地图绑定相应的事件 例如：click，load 等
   * @param map
   * @param event 
   * @param callback 
   */
  function handleOnEventForMap(map: MapLk, event: string, callback: (e?: any) => void) {
    map.on(event, callback)
  }

  /**
   * 解绑相应的事件
   * @param map 
   * @param event 
   * @param callback 
   */
  function handleOffEventForMap(map: MapLk, event: string, callback: (e?: any) => void) {
    map.off(event, callback)
  }

  return {
    maplk,
    createMap,
    handleOnEventForMap,
    handleOffEventForMap
  }
}
