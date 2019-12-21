import React from 'react';
import { render } from '@testing-library/react';

import { TextList } from '../TextList';
import { TextListItem } from '../TextListItem';

describe('Given <TextList />', (): void => {
  let container: HTMLElement;

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(
        <TextList>
          <TextListItem text="Testing" />
        </TextList>,
      ).container;
      expect(container).toMatchSnapshot();
    });
  });
});
