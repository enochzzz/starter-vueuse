import { LngLat, Pixel } from "./base"

export interface Padding {
  top?: number
  bottom?: number
  left?: number
  right?: number
}
export interface FitBoundsOptions {
  padding?: Padding
  linear?: boolean
  offset?: Pixel
  maxZoom?: number
  bearing?: number
  zoom?: number
  center: LngLat
  pitch?: number
  duration?: number
  animate?: boolean
}

export interface ToOptions {
  center: LngLat
  padding?: Padding
  zoom?: number
  bearing?: number
  pitch?: number
  duration?: number
  animate?: boolean
}

export interface EaseToOptions extends ToOptions {
  around?: LngLat
}

export interface FlyToOptions extends ToOptions {
  curve?: number
  speed?: number
  screenSpeed?: number
  maxDuration?: number
}
