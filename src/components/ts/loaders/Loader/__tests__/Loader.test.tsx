import React from 'react';
import { render } from '@testing-library/react';

import { Loader } from '../Loader';

describe('Given <Loader />', (): void => {
  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      const { container } = render(<Loader />);
      expect(container).toMatchSnapshot();
    });
  });
});
