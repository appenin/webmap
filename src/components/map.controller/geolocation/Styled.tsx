import styled from 'styled-components';

export const geolocationButtonContainer = styled.input.attrs({
  type: 'checkbox',
  id: 'geolocationBtn',
})`
  display: none;
`;

export const geolocationLabelPosition = styled.label.attrs({ htmlFor: 'geolocationBtn' })`
  position: absolute;
  right: 24px;
  top: 18em;
  z-index: 2;
  background-color: none;

  &:hover {
    transform: scale(120%);
  }
`;
