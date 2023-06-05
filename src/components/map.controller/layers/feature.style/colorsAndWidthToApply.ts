import { Fill, Stroke } from 'ol/style';

const clickedOnMapStyleFill = new Fill({
  color: 'rgba(255,255,0,0.9)',
});
const clickedOnMapStyleStroke = new Stroke({
  color: 'black',
  width: 1.25,
});

const geolocationStyleFill = new Fill({
  color: 'rgba(0, 255, 0, 1)',
});
const geolocationStyleStroke = new Stroke({
  color: '#3399CC',
  width: 1.25,
});

const customerColorStyleFill = new Fill({
  color: 'rgba(81, 107, 153, 1)',
});
const customerColorStyleStroke = new Stroke({
  color: 'rgba(0, 0, 0, 1)',
  width: 0.5,
});

export {
  clickedOnMapStyleFill,
  clickedOnMapStyleStroke,
  customerColorStyleFill,
  customerColorStyleStroke,
  geolocationStyleFill,
  geolocationStyleStroke,
};
