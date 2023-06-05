import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import { Loader } from './Loader';

describe('Loader', () => {
  describe('Loader component', () => {
    test('Should render the loader component', () => {
      render(<Loader />);
      expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
  });
});
