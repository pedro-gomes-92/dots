import React from 'react';
import { render } from '@testing-library/react';

import { Table } from '../Table';

describe('Given <Table />', (): void => {
  let container: HTMLElement;

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(<Table values={[[]]} />).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses values', (): void => {
      beforeEach((): void => {
        container = render(<Table values={[['a', 'b'], ['c', 'd']]} />).container;
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should render rows', (): void => {
        expect(container.querySelectorAll('.table-body .table-cell').length).toEqual(4);
      });
    });

    describe('And uses different lengths for values', (): void => {
      beforeEach((): void => {
        container = render(<Table values={[['a', 'b'], ['c'], ['d', 'e', 'f']]} />).container;
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should render rows', (): void => {
        expect(container.querySelectorAll('.table-body .table-cell').length).toEqual(9);
      });
    });

    describe('And uses labels', (): void => {
      beforeEach((): void => {
        container = render(<Table labels={['test 1', 'test 2', 'test 3']} values={[[]]} />).container;
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should render header', (): void => {
        expect(container.querySelectorAll('.table-header .table-cell').length).toEqual(3);
      });

      describe('And uses different lengths for values', (): void => {
        beforeEach((): void => {
          container = render(<Table labels={['test 1', 'test 2']} values={[['a', 'b'], ['c'], ['d', 'e', 'f']]} />)
            .container;
        });

        it('Then should match the snapshot', (): void => {
          expect(container).toMatchSnapshot();
        });

        it('And should render rows', (): void => {
          expect(container.querySelectorAll('.table-body .table-cell').length).toEqual(6);
        });
      });
    });
  });
});
