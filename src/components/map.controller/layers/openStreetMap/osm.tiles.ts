import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { BaseLayerOptions } from 'ol-layerswitcher';

export const osmBasemap = new TileLayer({
  visible: false,
  source: new OSM(),
  title: 'Open Street Map',
} as BaseLayerOptions);
