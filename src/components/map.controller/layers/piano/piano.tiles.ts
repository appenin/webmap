import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { BaseLayerOptions } from 'ol-layerswitcher';

import { config } from '../../../../config';

const { PIANO_TILES_API } = config;
const pianoServiceUrl = `${PIANO_TILES_API}/fr@2x/{z}/{x}/{y}.png`;

export const pianoBasemap = new TileLayer({
  visible: false,
  source: new XYZ({
    url: pianoServiceUrl,
  }),
  title: 'Piano',
} as BaseLayerOptions);
