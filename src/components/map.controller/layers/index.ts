import LayerGroup from 'ol/layer/Group';
import { GroupLayerOptions } from 'ol-layerswitcher';

import { cadastreGouv } from './cadastre/cadastre.tiles';
import { droughtTilesLayers } from './drought/drought.tiles';
import { filosifiCoveaTilesLayers } from './filosofi.appenin/filosofi.tiles';
import { floodAppeninTilesLayers } from './flood.appenin/flood.tiles';
import { floodCoveaTilesLayers } from './flood.covea/flood.tiles';
import { submersionTilesLayers } from './marineSubmersion.appenin/marineSubmersion.tiles';
import { osmBasemap } from './openStreetMap/osm.tiles';
import { orthoHRBasemap } from './ortho/orthophoto.tiles';
import { pianoBasemap } from './piano/piano.tiles';
import { esriBaseMap } from './topography/topography.tiles';

const vectorLayers = new LayerGroup({
  title: 'Risques',
  layers: [
    droughtTilesLayers,
    floodCoveaTilesLayers,
    submersionTilesLayers,
    floodAppeninTilesLayers,
  ],
  combine: false,
  fold: 'open',
} as GroupLayerOptions);

const sensitiveData = new LayerGroup({
  title: 'Economie',
  layers: [filosifiCoveaTilesLayers],
  combine: false,
  fold: 'open',
} as GroupLayerOptions);

const baseMaps = new LayerGroup({
  title: 'Base maps',
  layers: [esriBaseMap, osmBasemap, pianoBasemap, orthoHRBasemap, cadastreGouv],
  combine: false,
  fold: 'open',
  single: true,
} as GroupLayerOptions);

export { baseMaps, sensitiveData, vectorLayers };
