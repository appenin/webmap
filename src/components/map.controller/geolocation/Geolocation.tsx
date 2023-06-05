'use client';

import React, { useContext, useState } from 'react';

import GeolocationButton from '@/icons/geolocation_button.svg';

import { openlayerContext } from '../../../context';
import { Loader } from '../../loader/Loader';
import { goOnLocationSet } from './location';
import * as Styled from './Styled';

export function Geolocation() {
  const openLayerMap = useContext(openlayerContext);
  const [id, setId] = useState<any>();
  const [showLoader, setShowLoader] = useState(false);

  function geolocationInit() {
    navigator.geolocation.clearWatch(id);
    setShowLoader(true);
    const newLocation = navigator.geolocation.watchPosition(function (position) {
      goOnLocationSet(openLayerMap, position);
      setShowLoader(false);
    });
    setId(newLocation);
    navigator.geolocation.clearWatch(id);
  }

  return (
    <>
      {showLoader && <Loader />}
      <Styled.geolocationButtonContainer onClick={geolocationInit} />
      <Styled.geolocationLabelPosition>
        <GeolocationButton />
      </Styled.geolocationLabelPosition>
    </>
  );
}
