import React from 'react';
import { render } from '@testing-library/react';

import { TableHeader } from '../TableHeader';
import { TableRow } from '../TableRow';
import { TableCell } from '../TableCell';

describe('Given <TableHeader />', (): void => {
  let container: HTMLElement;
  const addTableHTML = (content: JSX.Element): JSX.Element => <table>{content}</table>;

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(
        addTableHTML(
          <TableHeader>
            <TableRow>
              <TableCell text="test" />
            </TableRow>
          </TableHeader>,
        ),
      ).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses children', (): void => {
      beforeEach((): void => {
        container = render(
          addTableHTML(
            <TableHeader>
              <TableRow>
                <TableCell text="test 1" />
                <TableCell text="test 2" />
              </TableRow>
            </TableHeader>,
          ),
        ).container;
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should render rows', (): void => {
        expect(container.querySelectorAll('.table-header .table-cell').length).toEqual(2);
      });
    });
  });
});
