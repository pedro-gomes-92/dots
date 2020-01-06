import React from 'react';
import { render } from '@testing-library/react';

import { TextAreaField } from '../TextAreaField';

describe('Given <TextAreaField />', (): void => {
  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      const { container } = render(<TextAreaField />);
      expect(container).toMatchSnapshot();
    });
  });
});
