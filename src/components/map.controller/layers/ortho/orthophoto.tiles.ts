import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { BaseLayerOptions } from 'ol-layerswitcher';

import { config } from '../../../../config';

const { IGN_TILES_API } = config;

const orthoHRServicesUrl = `${IGN_TILES_API}/essentiels/geoportail/wmts?layer=ORTHOIMAGERY.ORTHOPHOTOS&style=normal&tilematrixset=PM&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fjpeg&TileMatrix={z}&TileCol={x}&TileRow={y}`;

export const orthoHRBasemap = new TileLayer({
  visible: false,
  source: new XYZ({
    url: orthoHRServicesUrl,
  }),
  title: 'OrthoHR',
} as BaseLayerOptions);
