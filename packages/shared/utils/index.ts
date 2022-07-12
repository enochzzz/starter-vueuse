import { Common } from "../types/base";

export function createLKMapLayer(layer: string, options: Common) {
  return new LKMap[layer](options)
}
