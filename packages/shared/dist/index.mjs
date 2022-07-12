function createLKMapLayer(layer, options) {
    return new LKMap[layer](options);
}

const SKY_LAYER = 'SkyLayer';
const MAP = 'Map';

export { MAP, SKY_LAYER, createLKMapLayer };
