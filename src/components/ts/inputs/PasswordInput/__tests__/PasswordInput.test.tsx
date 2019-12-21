import React from 'react';
import { render } from '@testing-library/react';

import { PasswordInput } from '../PasswordInput';

describe('Given <PasswordInput />', (): void => {
  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      const { container } = render(<PasswordInput />);
      expect(container).toMatchSnapshot();
    });
  });
});
