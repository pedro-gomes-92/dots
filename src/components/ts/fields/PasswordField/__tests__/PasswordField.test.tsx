import React from 'react';
import { render } from '@testing-library/react';

import { PasswordField } from '../PasswordField';

describe('Given <PasswordField />', (): void => {
  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      const { container } = render(<PasswordField />);
      expect(container).toMatchSnapshot();
    });
  });
});
