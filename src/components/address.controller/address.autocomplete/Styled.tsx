import styled from 'styled-components';

export const GeocoderContainer = styled.div`
  position: absolute;
  top: 15%;
  left: 0;
  z-index: 100;

  input {
    height: 2em;
    width: 21em;
    border-radius: 5px;
    border-width: 1px;
    border-color: rgb(4, 69, 26);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  &:hover {
    transform: scale(105%);
  }
`;

export const RequestAdress = styled.button`
  position: relative;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  top: -31.5px;
  right: -9.5em;

  &::hover {
    transform: scale(120%);
    border-radius: 50%;
    z-index: 100;
  }
`;
