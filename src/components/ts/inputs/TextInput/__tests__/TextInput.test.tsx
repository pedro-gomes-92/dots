import React from 'react';
import { render } from '@testing-library/react';

import { TextInput } from '../TextInput';

describe('Given <TextInput />', (): void => {
  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      const { container } = render(<TextInput />);
      expect(container).toMatchSnapshot();
    });
  });
});
