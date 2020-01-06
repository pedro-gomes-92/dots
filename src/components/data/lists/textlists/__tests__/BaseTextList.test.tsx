import React from 'react';
import { render } from '@testing-library/react';

import { BaseTextList } from '../BaseTextList';
import { BaseTextListItem } from '../BaseTextListItem';

describe('Given <BaseTextList />', (): void => {
  let container: HTMLElement;

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(
        <BaseTextList>
          <BaseTextListItem text="Testing" />
        </BaseTextList>,
      ).container;
      expect(container).toMatchSnapshot();
    });
  });
});
