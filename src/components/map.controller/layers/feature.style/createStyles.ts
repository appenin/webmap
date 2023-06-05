import { Circle, Fill, Stroke, Style } from 'ol/style';

import {
  clickedOnMapStyleFill,
  clickedOnMapStyleStroke,
  customerColorStyleFill,
  customerColorStyleStroke,
  geolocationStyleFill,
  geolocationStyleStroke,
} from './colorsAndWidthToApply';

// Associate style to layer
export const layerStyle = {
  clientPoint: [
    new Style({
      image: new Circle({
        fill: clickedOnMapStyleFill,
        stroke: clickedOnMapStyleStroke,
        radius: 5,
      }),
      fill: clickedOnMapStyleFill,
      stroke: clickedOnMapStyleStroke,
    }),
  ],

  clickedOnMapPointStyle: [
    new Style({
      image: new Circle({
        fill: clickedOnMapStyleFill,
        stroke: clickedOnMapStyleStroke,
        radius: 5,
      }),
      fill: clickedOnMapStyleFill,
      stroke: clickedOnMapStyleStroke,
    }),
  ],

  geolocationStyle: [
    new Style({
      image: new Circle({
        fill: geolocationStyleFill,
        stroke: geolocationStyleStroke,
        radius: 5,
      }),
      fill: geolocationStyleFill,
      stroke: geolocationStyleStroke,
    }),
  ],

  floodTiles: new Style({
    stroke: new Stroke({
      color: 'blue',
      width: 0.25,
    }),
    fill: new Fill({
      color: 'rgba(39,172,245,0.2)',
    }),
  }),

  customerStyle: [
    new Style({
      image: new Circle({
        fill: customerColorStyleFill,
        stroke: customerColorStyleStroke,
        radius: 5,
      }),
      fill: customerColorStyleFill,
      stroke: customerColorStyleStroke,
    }),
  ],
};
