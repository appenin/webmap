'use·client';

import { criminialityRoute } from '../../domain/services/route.criminality';
import { ModelData } from '../../libs/type';

export async function callApiGeo(lat: number, lng: number): Promise<ModelData> {
  try {
    const { buildings_50m, buildings_100m } = await criminialityRoute(lat, lng);

    return {
      a_location: { buildings_50m, buildings_100m },
      b_naturalRisk: buildings_100m,
      c_robbery: buildings_50m,
      d_waterDamage: buildings_100m,
      e_fire: buildings_50m,
    };
  } catch (error) {
    throw new Error(`Error in callApiGeo: ${error}`);
  }
}
