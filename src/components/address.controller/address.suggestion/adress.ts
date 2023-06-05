import { transform } from 'ol/proj';

import { config } from '../../../config';
import { defaultZoomMax } from '../../../utils/defaultValues';
import { getUniqueListBy } from '../../../utils/math';
import { createPointFromApi, removeLayer } from '../../../utils/produceGeometries';
import { layerStyle } from '../../map.controller/layers/feature.style/createStyles';

async function getAdressSuggestions(value: any, currentSuggestions: any) {
  if (value && value.length > 3) {
    const searchParams = new URLSearchParams({ q: value });
    const requestUrl = `${config.BAN_URL}/?${searchParams.toString()}`;

    const response = await fetch(requestUrl, {
      mode: 'cors',
    });

    const responseJson = await response.json();

    if (responseJson.features.length > 0) {
      const label = responseJson.features[0].properties.label;
      return getUniqueListBy([...currentSuggestions, { label }], 'label');
    }
  }
  return currentSuggestions;
}

async function getZoomAndLocationFromAdress(value: any, map: any) {
  if (value) {
    const searchParams = new URLSearchParams({ q: value });
    const requestUrl = `${config.BAN_URL}/?${searchParams.toString()}`;

    try {
      const response = await fetch(requestUrl);
      const responseJSon = await response.json();

      const coordinates = transform(
        responseJSon.features[0].geometry.coordinates,
        'EPSG:4326',
        'EPSG:3857',
      );

      // Add point once locate then center/zoom on current location
      removeLayer(map, 'geocoder');
      map.addLayer(createPointFromApi(coordinates, 'geocoder', layerStyle.geolocationStyle));
      map.getView().setCenter(coordinates);
      map.getView().setZoom(defaultZoomMax);
    } catch (error: any) {
      alert(`An error has occured: ${error.message}`);
    }
  }
}

export { getAdressSuggestions, getZoomAndLocationFromAdress };
