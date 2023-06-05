'use client';

import { transform } from 'ol/proj.js';
import View from 'ol/View';
import React, { useContext, useEffect, useState } from 'react';

import { openlayerContext } from '../../context';
import { useSearchCoordinates } from '../../domain/urlControllers/searchCoordinates';
import * as Styled from './styled';

export function MapRendering(): JSX.Element {
  const [hash, setHash] = useState(window.location.hash);
  const [coordinate, setCoordinate] = useState([40.567, -3.244, 10] as [number, number, number]);
  const openLayerMap = useContext(openlayerContext);

  useEffect(() => {
    const [lng, lat, zoom] = useSearchCoordinates(hash, openLayerMap);
    setCoordinate([lng, lat, zoom]);
  }, [hash]);

  useEffect(() => {
    window.addEventListener('hashchange', () => setHash(window.location.hash));
    return () => {
      window.removeEventListener('hashchange', () => setHash(window.location.hash));
    };
  }, []);

  useEffect(() => {
    const [lng, lat, zoom] = coordinate;
    openLayerMap.setTarget('map');
    openLayerMap.setView(
      new View({
        center: transform([lng, lat], 'EPSG:4326', 'EPSG:3857'),
        zoom,
      }),
    );
  }, [coordinate]);

  return <Styled.MapContainer id="map" />;
}
