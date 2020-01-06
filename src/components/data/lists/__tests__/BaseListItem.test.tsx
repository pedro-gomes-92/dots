import React from 'react';
import { render } from '@testing-library/react';

import { BaseListItem } from '../BaseListItem';
import { Text } from '../../../text';

describe('Given <BaseListItem />', (): void => {
  let container: HTMLElement;

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(<BaseListItem />).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses children', (): void => {
      it('Then should match the snapshot', (): void => {
        container = render(
          <BaseListItem>
            <Text text="Testing" />
          </BaseListItem>,
        ).container;
        expect(container).toMatchSnapshot();
      });
    });
  });
});
