import React from 'react';
import { render } from '@testing-library/react';

import { BaseLoader } from '../BaseLoader';
import { Icon } from '../../miscellaneous';

describe('Given <BaseLoader />', (): void => {
  describe('When initializes', (): void => {
    let container: HTMLElement;
    it('Then should match the snapshot', (): void => {
      container = render(<BaseLoader />).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses loader', (): void => {
      beforeEach((): void => {
        container = render(<BaseLoader loader={<Icon name="menu" />} />).container;
      });
      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should render loader', (): void => {
        expect(container.querySelector('.icon-font-menu')).toBeTruthy();
      });
    });
  });
});
