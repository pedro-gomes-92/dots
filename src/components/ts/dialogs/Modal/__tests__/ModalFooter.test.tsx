import React from 'react';
import { render } from '@testing-library/react';

import { ModalFooter } from '../ModalFooter';
import { Text } from '../../../text';

describe('Given <ModalFooter />', (): void => {
  let container: HTMLElement;

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(
        <ModalFooter>
          <Text text="Testing" />
        </ModalFooter>,
      ).container;
      expect(container).toMatchSnapshot();
    });
  });
});
