import MVT from 'ol/format/MVT';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import { Fill, Stroke, Style } from 'ol/style';
import { BaseLayerOptions } from 'ol-layerswitcher';

import { config } from '../../../../config';

const { DATA_GOUV_TILES_API } = config;

const cadastreDataGouvServiceUrl = `${DATA_GOUV_TILES_API}/data/cadastre/{z}/{x}/{y}.pbf`;

export const cadastreGouv = new VectorTileLayer({
  visible: false,
  source: new VectorTileSource({
    format: new MVT(),
    url: cadastreDataGouvServiceUrl,
    maxZoom: 20,
    minZoom: 11,
  }),
  style: function (feature: any) {
    const sectionsStyle = new Style({
      fill: new Fill({
        color: 'rgba(57, 41, 74, 0.2)',
      }),
      stroke: new Stroke({
        color: 'rgba(0, 0, 0, 0.6)',
        width: 0.45,
      }),
    });
    const parcellesStyle = new Style({
      fill: new Fill({
        color: 'rgba(105, 103, 74, 0.3)',
      }),
      stroke: new Stroke({
        color: 'rgba(0, 0, 0, 0.6)',
        width: 0.45,
      }),
    });
    const batimentsStyle = new Style({
      fill: new Fill({
        color: 'rgba(0, 0, 0, 1)',
      }),
    });

    switch (feature.get('layer')) {
      case 'parcelles':
        return [parcellesStyle];
      case 'sections':
        return [sectionsStyle];
      case 'batiments':
        return [batimentsStyle];
      default:
        return [sectionsStyle];
    }
  },
  title: 'Cadastre',
} as BaseLayerOptions);
