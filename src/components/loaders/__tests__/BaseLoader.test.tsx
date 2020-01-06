import React from 'react';
import { render } from '@testing-library/react';

import { BaseLoader } from '../BaseLoader';

describe('Given <BaseLoader />', (): void => {
  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      const { container } = render(<BaseLoader />);
      expect(container).toMatchSnapshot();
    });
  });
});
