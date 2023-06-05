import './pricing.css';

import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { ContentApiGeo } from './ContentApiGeo';

export function TabsContent({ resultApiGeo }: any) {
  const [activeTab, setActiveTab] = useState('Location');

  function handleTabClick(tab: any) {
    setActiveTab(tab);
  }
  return (
    <div className="tab-content">
      <button onClick={() => handleTabClick('Location')}>Administration</button>
      <button onClick={() => handleTabClick('NaturalHazard')}>Criminalité</button>
      <button onClick={() => handleTabClick('robbery')}>Economie</button>
      <button onClick={() => handleTabClick('waterDamage')}>Risques</button>
      <button onClick={() => handleTabClick('Security')}>Sécurité</button>
      <button onClick={() => handleTabClick('security')}>Sécurité</button>
      <ContentApiGeo activeScreen={activeTab} resultApiGeo={resultApiGeo} />
    </div>
  );
}

TabsContent.propTypes = { resultApiGeo: PropTypes.object };
