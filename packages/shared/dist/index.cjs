'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function createLKMapLayer(layer, options) {
    return new LKMap[layer](options);
}

const SKY_LAYER = 'SkyLayer';
const MAP = 'Map';

exports.MAP = MAP;
exports.SKY_LAYER = SKY_LAYER;
exports.createLKMapLayer = createLKMapLayer;
