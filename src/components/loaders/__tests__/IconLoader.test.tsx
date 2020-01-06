import React from 'react';
import { render } from '@testing-library/react';

import { IconLoader } from '../IconLoader';

describe('Given <IconLoader />', (): void => {
  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      const { container } = render(<IconLoader />);
      expect(container).toMatchSnapshot();
    });
  });
});
