import React from 'react';

import { AutocompleteAdress } from '../address.controller';
import { Geolocation } from './geolocation/Geolocation';
import { ShowInformationButton } from './show.information/Show.information.button';

export const MapController = (): JSX.Element => {
  return (
    <>
      <ShowInformationButton />
      <Geolocation />
      <AutocompleteAdress />
    </>
  );
};
