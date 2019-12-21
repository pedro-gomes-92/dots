import React from 'react';
import { render } from '@testing-library/react';

import { ListDivider } from '../ListDivider';

describe('Given <ListDivider />', (): void => {
  let container: HTMLElement;

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(<ListDivider />).container;
      expect(container).toMatchSnapshot();
    });
  });
});
