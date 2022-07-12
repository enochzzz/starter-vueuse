interface Common {
    [PropsName: string]: any;
}
interface LngLat extends Common {
}
interface Bounds extends Common {
}
interface Pixel extends Common {
}
interface SkyLayer extends Common {
}
interface MapLk extends Common {
}

interface Padding {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
}
interface FitBoundsOptions {
    padding?: Padding;
    linear?: boolean;
    offset?: Pixel;
    maxZoom?: number;
    bearing?: number;
    zoom?: number;
    center: LngLat;
    pitch?: number;
    duration?: number;
    animate?: boolean;
}
interface ToOptions {
    center: LngLat;
    padding?: Padding;
    zoom?: number;
    bearing?: number;
    pitch?: number;
    duration?: number;
    animate?: boolean;
}
interface EaseToOptions extends ToOptions {
    around?: LngLat;
}
interface FlyToOptions extends ToOptions {
    curve?: number;
    speed?: number;
    screenSpeed?: number;
    maxDuration?: number;
}

declare function createLKMapLayer(layer: string, options: Common): any;

declare const SKY_LAYER = "SkyLayer";
declare const MAP = "Map";

export { Bounds, Common, EaseToOptions, FitBoundsOptions, FlyToOptions, LngLat, MAP, MapLk, Padding, Pixel, SKY_LAYER, SkyLayer, ToOptions, createLKMapLayer };
