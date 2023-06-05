import MVT from 'ol/format/MVT';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import { Fill, Stroke, Style } from 'ol/style';
import { BaseLayerOptions } from 'ol-layerswitcher';

import { config } from '../../../../config';

const { FALCO_TILES } = config;

const filosifiAppeninServiceUrl = `${FALCO_TILES}/data/tiles_filosofi_appenin/{z}/{x}/{y}.pbf`;

const veryLow = 8381;
const low = 20936;
const medium = 23756;
const high = 40000;
const veryHigh = 66061;

export const filosifiCoveaTilesLayers = new VectorTileLayer({
  declutter: true,
  source: new VectorTileSource({
    maxZoom: 15,
    format: new MVT({
      idProperty: 'iso_a3',
    }),
    url: filosifiAppeninServiceUrl,
  }),
  visible: false,
  style: function (feature: any) {
    const defaultStyle = new Style({
      fill: new Fill({
        color: 'rgba(227, 253, 228, 0.8)',
      }),
      stroke: new Stroke({
        color: 'black',
        width: 0.2,
      }),
    });
    const veryLightGreen = new Style({
      fill: new Fill({
        color: 'rgba(227, 253, 228, 0.8)',
      }),
      stroke: new Stroke({
        color: 'black',
        width: 0.2,
      }),
    });
    const lightGreen = new Style({
      fill: new Fill({
        color: 'rgba(162, 255, 167, 0.8)',
      }),
      stroke: new Stroke({
        color: 'black',
        width: 0.2,
      }),
    });
    const mediumGreen = new Style({
      fill: new Fill({
        color: 'rgba(53, 228, 62, 0.8)',
      }),
      stroke: new Stroke({
        color: 'black',
        width: 0.2,
      }),
    });
    const strongGreen = new Style({
      fill: new Fill({
        color: 'rgba(0, 94, 5, 0.8)',
      }),
      stroke: new Stroke({
        color: 'black',
        width: 0.2,
      }),
    });
    const veryStrongGreen = new Style({
      fill: new Fill({
        color: 'rgba(0, 42, 2, 0.8)',
      }),
      stroke: new Stroke({
        color: 'black',
        width: 0.2,
      }),
    });

    const value = feature.get('NIVEAUX_DE');
    switch (true) {
      case value < veryLow:
        return [veryLightGreen];
      case value < low:
        return [lightGreen];
      case value < medium:
        return [mediumGreen];
      case value < high:
        return [strongGreen];
      case value < veryHigh:
        return [veryStrongGreen];
      default:
        return [defaultStyle];
    }
  },
  group: 'Filosofi',
  title: 'Filosofi - Appenin',
} as BaseLayerOptions);
