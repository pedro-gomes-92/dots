import React from 'react';
import { render } from '@testing-library/react';

import { Text } from '../../../../text';
import { List } from '../List';
import { ListItem } from '../ListItem';

describe('Given <List />', (): void => {
  let container: HTMLElement;

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(
        <List>
          <ListItem>
            <Text text="Testing" />
          </ListItem>
        </List>,
      ).container;
      expect(container).toMatchSnapshot();
    });
  });
});
