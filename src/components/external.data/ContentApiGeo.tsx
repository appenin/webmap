import './pricing.css';

import PropTypes, { InferProps } from 'prop-types';
import React from 'react';

import { ContentApiGeoProps } from '../../libs/type';

export function ContentApiGeo({ activeScreen, resultApiGeo }: InferProps<ContentApiGeoProps>) {
  if (resultApiGeo) {
    const { a_location, b_naturalRisk, c_robbery, d_waterDamage, e_fire } = resultApiGeo;
    return (
      <div className="content">
        {activeScreen === 'Location' && <div>{JSON.stringify(a_location)}</div>}
        {activeScreen === 'NaturalHazard' && <div>{JSON.stringify(b_naturalRisk)}</div>}
        {activeScreen === 'robbery' && <div>{JSON.stringify(c_robbery)}</div>}
        {activeScreen === 'waterDamage' && <div>{JSON.stringify(d_waterDamage)}</div>}
        {activeScreen === 'fire' && <div>{JSON.stringify(e_fire)}</div>}
      </div>
    );
  }
  return null;
}

ContentApiGeo.propTypes = { activeScreen: PropTypes.string, resultApiGeo: PropTypes.object };
