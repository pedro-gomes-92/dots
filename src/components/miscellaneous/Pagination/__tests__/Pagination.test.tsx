import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Pagination } from '../Pagination';

describe('Given <Pagination />', (): void => {
  let container: HTMLElement;
  const getList = (html: HTMLElement): HTMLCollection => html.querySelector('ul.list').children;
  const getPage = (html: HTMLElement, index: number): HTMLElement =>
    getList(html)
      .item(index)
      .querySelector('.pagination-link');

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(<Pagination total={20} />).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses total', (): void => {
      it('Then should render total pages', (): void => {
        container = render(<Pagination total={4} />).container;
        expect(getList(container).length).toEqual(4);
      });
    });

    /*
    describe('And uses invalid total', (): void => {
      it('Then should throw an error', (): void => {
        const invalid = (): void => {
          render(<Pagination total={0} />);
        };

        expect(invalid).toThrowError('Invalid values on properties');
      });
    });
    */

    describe('And uses range', (): void => {
      beforeEach((): void => {
        container = render(<Pagination total={20} range={2} />).container;
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should render no more than ranged pages', (): void => {
        const list = getList(container);
        expect(list.length).toEqual(9);

        fireEvent.click(getPage(container, 7));

        expect(list.item(1).querySelector('.text').textContent).toEqual('...');
        expect(list.item(7).querySelector('.text').textContent).toEqual('...');
      });
    });

    /* 
    describe('And uses invalid range', (): void => {
      it('Then should throw an error', (): void => {
        const invalid = (): void => {
          render(<Pagination total={20} range={-1} />);
        };

        expect(invalid).toThrowError('Invalid values on properties');
      });
    });
    */
  });

  describe('When changes page', (): void => {
    it('Then should trigger onPageChange', (): void => {
      const pageChange = jest.fn();
      container = render(<Pagination total={20} onPageChange={pageChange} />).container;
      fireEvent.click(getPage(container, 7));

      expect(pageChange).toBeCalledTimes(1);
    });
  });
});
