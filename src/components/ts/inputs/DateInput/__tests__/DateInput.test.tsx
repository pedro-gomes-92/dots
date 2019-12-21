import React from 'react';
import { render } from '@testing-library/react';

import { DateInput } from '../DateInput';

describe('Given <DateInput />', (): void => {
  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      const { container } = render(<DateInput />);
      expect(container).toMatchSnapshot();
    });
  });
});
