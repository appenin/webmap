'use client';

import { debounce } from 'lodash';
import React, { useContext, useEffect, useState } from 'react';
import Autocomplete from 'react-autocomplete';

import SearchImg from '@/icons/search_img.svg';

import { openlayerContext } from '../../../context';
import { Loader } from '../../loader/Loader';
import { getAdressSuggestions, getZoomAndLocationFromAdress } from '../address.suggestion/adress';
import * as Styled from './Styled';

export function AutocompleteAdress() {
  const openLayerMap = useContext(openlayerContext);
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  const handleAddressChange = ({ target: { value } }: any) => setAddress(value);

  function submitRequest() {
    setShowLoader(true);
    getZoomAndLocationFromAdress(address, openLayerMap);
    setShowLoader(false);
  }

  const search = async () => {
    const newSuggestions = await getAdressSuggestions(address, suggestions);
    setSuggestions(newSuggestions);
  };

  const debouncedSearch = debounce(search, 1000);

  useEffect(() => {
    if (address) {
      debouncedSearch();
    } else {
      setSuggestions([]);
    }
  }, [address]);

  return (
    <>
      {showLoader && <Loader />}
      <Styled.GeocoderContainer>
        <Autocomplete
          getItemValue={(item: any) => item.label}
          items={suggestions}
          renderItem={(item: any, isHighlighted: any) => (
            <div key={item.label} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {item.label}
            </div>
          )}
          value={address}
          onChange={handleAddressChange}
          onSelect={setAddress}
          wrapperStyle={{ textAlign: 'left' }}
        />
        <Styled.RequestAdress onClick={submitRequest}>
          <SearchImg />
        </Styled.RequestAdress>
      </Styled.GeocoderContainer>
    </>
  );
}
