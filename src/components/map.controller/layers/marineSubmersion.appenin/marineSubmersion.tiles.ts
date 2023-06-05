import MVT from 'ol/format/MVT';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import { Fill, Style } from 'ol/style';
import { BaseLayerOptions } from 'ol-layerswitcher';

import { config } from '../../../../config';

const { FALCO_TILES } = config;

const submersionAppeninServiceUrl = `${FALCO_TILES}/data/submersion/{z}/{x}/{y}.pbf`;

export const submersionTilesLayers = new VectorTileLayer({
  declutter: true,
  source: new VectorTileSource({
    maxZoom: 15,
    format: new MVT({
      idProperty: 'iso_a3',
    }),
    url: submersionAppeninServiceUrl,
  }),
  visible: true,
  style: new Style({
    fill: new Fill({
      color: 'rgba(134, 217, 255, 0.7)',
    }),
  }),
  // function (feature: any) {
  //   const defaultStyle = new Style({
  //     fill: new Fill({
  //       color: 'rgba(39,172,245,0.2)',
  //     }),
  //   });
  //   const lightBlue = new Style({
  //     fill: new Fill({
  //       color: 'rgba(134, 217, 255, 0.7)',
  //     }),
  //   });
  //   const mediumBlue = new Style({
  //     fill: new Fill({
  //       color: 'rgba(0, 175, 255, 0.7)',
  //     }),
  //   });
  //   const darkBlue = new Style({
  //     fill: new Fill({
  //       color: 'rgba(0, 81, 117, 0.7)',
  //     }),
  //   });

  //   switch (feature.get('theme')) {
  //     case 1:
  //       return [lightBlue];
  //     case 2:
  //       return [mediumBlue];
  //     case 3:
  //       return [darkBlue];
  //     default:
  //       return [defaultStyle];
  //   }

  title: 'Submersion marine - Appenin',
} as BaseLayerOptions);
