import { Map } from 'ol';
import { transform } from 'ol/proj.js';

import { defaultZoomMax } from '../../../utils/defaultValues';
import { createPointFromApi, removeLayer } from '../../../utils/produceGeometries';
import { layerStyle } from '../layers/feature.style/createStyles';

export function goOnLocationSet(olmap: Map, position: any) {
  removeLayer(olmap, 'geolocation');
  const coordinates = [position.coords.latitude, position.coords.longitude];
  olmap.getView().setCenter(transform([coordinates[1], coordinates[0]], 'EPSG:4326', 'EPSG:3857'));
  olmap.getView().setZoom(defaultZoomMax);
  const glPointLayer = createPointFromApi(
    transform([coordinates[1], coordinates[0]], 'EPSG:4326', 'EPSG:3857'),
    'geolocation',
    layerStyle.geolocationStyle,
  );
  olmap.addLayer(glPointLayer);
}
