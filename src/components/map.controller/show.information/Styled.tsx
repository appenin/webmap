import styled from 'styled-components';

export const AddPointButtonContainer = styled.input.attrs({ type: 'checkbox', id: 'checkboxImg' })`
  display: none;
`;

export const labelPosition = styled.label.attrs({ htmlFor: 'checkboxImg' })`
  position: absolute;
  top: 14.35em;
  right: 24px;
  z-index: 1;

  &:hover {
    transform: scale(120%);
  }
`;
