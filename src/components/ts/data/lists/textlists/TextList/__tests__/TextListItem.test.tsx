import React from 'react';
import { render } from '@testing-library/react';

import { TextListItem } from '../TextListItem';

describe('Given <TextListItem />', (): void => {
  let container: HTMLElement;

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(<TextListItem text="Testing" />).container;
      expect(container).toMatchSnapshot();
    });
  });
});
