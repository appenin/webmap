'use client';

// import { Coordinate } from 'ol/coordinate';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { ModelData } from '../../libs/type';
import { from3857to4326 } from '../../utils/produceGeometries';
import { callApiGeo } from './call.api';
import { TabsContent } from './TabsContent';

export const DisplayDataFromApiGeo = ({ coordinates }: any) => {
  const [getApiGeoData, setGetApiGeoData] = useState<ModelData>();

  useEffect(() => {
    async function getData() {
      const [lat, lng] = from3857to4326(coordinates.coordinate);
      const result = callApiGeo(lng, lat);
      setGetApiGeoData(await result);
    }
    getData();
  }, [coordinates]);

  return <TabsContent resultApiGeo={getApiGeoData} />;
};

DisplayDataFromApiGeo.propTypes = { coordinates: PropTypes.object };
