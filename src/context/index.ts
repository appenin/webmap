import { Map } from 'ol';
import { defaults, FullScreen, ScaleLine } from 'ol/control';
import LayerSwitcher, { RenderOptions } from 'ol-layerswitcher';
import { createContext } from 'react';

import { baseMaps, sensitiveData, vectorLayers } from '../components/map.controller/layers';

export const openlayerContext = createContext<Map>(initMap());

function initMap(): Map {
  return new Map({
    target: undefined,
    layers: [baseMaps, vectorLayers, sensitiveData],
    view: undefined,
    controls: defaults({ attribution: true, zoom: true, rotate: true }).extend([
      new ScaleLine(),
      new FullScreen(),
      new LayerSwitcher({
        activationMode: 'click',
        tipLabel: 'Légende',
        groupSelectStyle: 'children',
      } as RenderOptions),
    ]),
  });
}
