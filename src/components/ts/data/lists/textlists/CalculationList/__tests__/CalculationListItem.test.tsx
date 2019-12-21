import React from 'react';
import { render } from '@testing-library/react';

import { CalculationListItem } from '../CalculationListItem';

describe('Given <CalculationListItem />', (): void => {
  let container: HTMLElement;

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(<CalculationListItem text="Testing" />).container;
      expect(container).toMatchSnapshot();
    });
  });
});
