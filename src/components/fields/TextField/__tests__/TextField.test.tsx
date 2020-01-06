import React from 'react';
import { render } from '@testing-library/react';

import { TextField } from '../TextField';

describe('Given <TextField />', (): void => {
  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      const { container } = render(<TextField />);
      expect(container).toMatchSnapshot();
    });
  });
});
