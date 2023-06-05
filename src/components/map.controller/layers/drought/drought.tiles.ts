import MVT from 'ol/format/MVT';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import { Fill, Style } from 'ol/style';
import { BaseLayerOptions } from 'ol-layerswitcher';

import { config } from '../../../../config';

const { FALCO_TILES } = config;
const droughtAppeninServiceUrl = `${FALCO_TILES}/data/drought/{z}/{x}/{y}.pbf`;

export const droughtTilesLayers = new VectorTileLayer({
  declutter: true,
  source: new VectorTileSource({
    maxZoom: 15,
    format: new MVT({
      idProperty: 'iso_a3',
    }),
    url: droughtAppeninServiceUrl,
  }),
  visible: false,
  style: function (feature: any) {
    const defaultStyle = new Style({
      fill: new Fill({
        color: 'rgba(255, 251, 84, 0.7)',
      }),
    });
    const lightYellow = new Style({
      fill: new Fill({
        color: 'rgba(255, 251, 84, 0.7)',
      }),
    });
    const mediumOrange = new Style({
      fill: new Fill({
        color: 'rgba(255, 173, 84, 0.7)',
      }),
    });
    const red = new Style({
      fill: new Fill({
        color: 'rgba(179, 0, 0, 0.7)',
      }),
    });

    switch (feature.get('Max_mrn')) {
      case 1:
        return [lightYellow];
      case 2:
        return [mediumOrange];
      case 3:
        return [red];
      default:
        return [defaultStyle];
    }
  },
  title: 'Sécheresse',
} as BaseLayerOptions);
