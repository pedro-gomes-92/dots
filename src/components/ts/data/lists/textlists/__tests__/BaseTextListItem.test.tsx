import React from 'react';
import { render } from '@testing-library/react';

import { BaseTextListItem } from '../BaseTextListItem';

describe('Given <BaseTextListItem />', (): void => {
  let container: HTMLElement;

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(<BaseTextListItem text="Testing" />).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses text', (): void => {
      beforeEach((): void => {
        container = render(<BaseTextListItem text="Testing 2" />).container;
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should render text value', (): void => {
        expect(container.querySelector('.text.is-primary').textContent).toEqual('Testing 2');
      });
    });

    describe('And uses secondaryText', (): void => {
      beforeEach((): void => {
        container = render(<BaseTextListItem text="Testing" secondaryText="Secondary Testing" />).container;
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should render text value', (): void => {
        expect(container.querySelector('.text.is-secondary').textContent).toEqual('Secondary Testing');
      });
    });
  });
});
