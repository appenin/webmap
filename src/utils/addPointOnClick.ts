import { Map } from 'ol';

import { layerStyle } from '../components/map.controller/layers/feature.style/createStyles';
import { createPointFromEvent, removeLayer } from './produceGeometries';

function addClickedPointLayerHandler(map: Map, event: Object, layerName: string) {
  removeLayer(map, layerName);
  const clickedPointLayer = createPointFromEvent(event, layerName, layerStyle.geolocationStyle);
  map.addLayer(clickedPointLayer);
}

export { addClickedPointLayerHandler };
