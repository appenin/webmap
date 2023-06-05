'use client';

import React, { useContext, useEffect, useState } from 'react';

import DisplayDataOffIcon from '@/icons/display_data_closed.svg';
import DisplayDataOnIcon from '@/icons/display_data_open.svg';

import { openlayerContext } from '../../../context';
import { addClickedPointLayerHandler } from '../../../utils/addPointOnClick';
import { removeLayer } from '../../../utils/produceGeometries';
import { DisplayDataFromApiGeo } from '../../external.data/Display.api.geo';
import * as Styled from './Styled';

const initValue = {
  coordinate: [0, 0],
};

export const ShowInformationButton = () => {
  const openLayerMap = useContext(openlayerContext);
  const [renderComponent, setRenderComponent] = useState(false);
  const [coordinates, setCoordinates] = useState<any>(initValue);

  useEffect(() => {
    if (coordinates.coordinate[0] !== 0 && coordinates.coordinate[1] !== 0) {
      addClickedPointLayerHandler(openLayerMap, coordinates, 'clickedPoint');
    }
  }, [coordinates]);

  const handleClickToDisplayPoint = ({ target: { checked } }: any) => {
    if (checked) {
      openLayerMap.on('click', setCoordinates);
      setRenderComponent(true);
    } else {
      openLayerMap.un('click', setCoordinates);
      removeLayer(openLayerMap, 'clickedPoint');
      setRenderComponent(false);
    }
  };

  return (
    <>
      <Styled.AddPointButtonContainer onClick={handleClickToDisplayPoint} />
      <Styled.labelPosition>
        {renderComponent ? <DisplayDataOnIcon /> : <DisplayDataOffIcon />}
      </Styled.labelPosition>
      {renderComponent && coordinates.coordinate[0] !== 0 && coordinates.coordinate[1] !== 0 ? (
        <DisplayDataFromApiGeo coordinates={coordinates} />
      ) : null}
    </>
  );
};
