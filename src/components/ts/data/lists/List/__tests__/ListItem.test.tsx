import React from 'react';
import { render } from '@testing-library/react';

import { Text } from '../../../../text';
import { ListItem } from '../ListItem';

describe('Given <ListItem />', (): void => {
  let container: HTMLElement;

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(
        <ListItem>
          <Text text="Testing" />
        </ListItem>,
      ).container;
      expect(container).toMatchSnapshot();
    });
  });
});
