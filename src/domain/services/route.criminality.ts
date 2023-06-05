'use client';

import { config } from '../../config';
import { getQueriesValueFromApiGeo } from './queryApi';

type CriminalityResponse = {
  buildings_50m: number;
  buildings_100m: number;
};

export const criminialityRoute = (lat: number, lon: number): Promise<CriminalityResponse> => {
  const criminalityRoute = `${config.API_GEO_BASE_URL}/criminality`;

  const buildings50m = `${criminalityRoute}/buildings-50m/@${lat},${lon}`;
  const getbuildings50m = getQueriesValueFromApiGeo(buildings50m);

  const buildings100m = `${criminalityRoute}/buildings-100m/@${lat},${lon}`;
  const getbuildings100m = getQueriesValueFromApiGeo(buildings100m);

  return Promise.all([getbuildings50m, getbuildings100m]).then(
    ([buildings_50m, buildings_100m]) => {
      return { buildings_50m, buildings_100m };
    },
  );

  // return { getbuildings50m, getbuildings100m };
};
