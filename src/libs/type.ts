export type ModelData = {
  a_location: number | undefined | Object | any[];
  b_naturalRisk: any;
  c_robbery: any;
  d_waterDamage: any;
  e_fire: any;
};

export type ContentApiGeoProps = {
  activeScreen: string;
  resultApiGeo: ModelData;
};
