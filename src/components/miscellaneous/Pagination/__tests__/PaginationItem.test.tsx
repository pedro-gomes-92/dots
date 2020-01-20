import React from 'react';
import { render } from '@testing-library/react';

import { PaginationItem } from '../PaginationItem';

describe('Given <PaginationItem />', (): void => {
  let container: HTMLElement;

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(<PaginationItem text="1" onClick={(): void => {}} />).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses text', (): void => {
      it('Then should render text value', (): void => {
        container = render(<PaginationItem text="2" onClick={(): void => {}} />).container;
        expect(container.querySelector('.text').textContent).toEqual('2');
      });
    });

    describe('And uses isCurrent', (): void => {
      it('Then should mark the item as active', (): void => {
        container = render(<PaginationItem text="2" isCurrent onClick={(): void => {}} />).container;
        expect(container.querySelector('.is-current')).toBeTruthy();
      });
    });
  });
});
