'use client';

import React from 'react';

import { MapController } from './map.controller/Map.controller';
import { MapRendering } from './map.rendering/Map.rendering';
import * as Styled from './styled';

export function Map(): JSX.Element {
  return (
    <Styled.MainMappingContainer>
      <MapRendering />
      <MapController />
    </Styled.MainMappingContainer>
  );
}
