import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

import { layerStyle } from '../feature.style/createStyles';

// const pathToJsonData = require('../../data/contrat_loc.geojson');

const customerDataLayer = new VectorLayer({
  visible: false,
  source: new VectorSource({
    format: new GeoJSON(),
    // url: pathToJsonData,
  }),
  style: layerStyle.customerStyle,
});

export { customerDataLayer };
