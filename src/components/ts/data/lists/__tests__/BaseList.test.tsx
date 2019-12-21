import React from 'react';
import { render } from '@testing-library/react';

import { Text } from '../../../text';
import { BaseList } from '../BaseList';
import { BaseListItem } from '../BaseListItem';

describe('Given <BaseList />', (): void => {
  let container: HTMLElement;

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(
        <BaseList>
          <BaseListItem>
            <Text text="Testing" />
          </BaseListItem>
        </BaseList>,
      ).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses children', (): void => {
      beforeEach((): void => {
        container = render(
          <BaseList>
            <BaseListItem>
              <Text text="Testing" />
            </BaseListItem>
            <BaseListItem>
              <Text text="Testing 2" />
            </BaseListItem>
          </BaseList>,
        ).container;
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should render items', (): void => {
        expect(container.querySelectorAll('.list-item').length).toEqual(2);
      });
    });
  });
});
