import React from 'react';
import { render } from '@testing-library/react';

import { TableBody } from '../TableBody';
import { TableRow } from '../TableRow';
import { TableCell } from '../TableCell';

describe('Given <TableBody />', (): void => {
  let container: HTMLElement;
  const addTableHTML = (content: JSX.Element): JSX.Element => <table>{content}</table>;

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(
        addTableHTML(
          <TableBody>
            <TableRow>
              <TableCell text="a" />
            </TableRow>
          </TableBody>,
        ),
      ).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses children', (): void => {
      beforeEach((): void => {
        container = render(
          addTableHTML(
            <TableBody>
              <TableRow>
                <TableCell text="a" />
                <TableCell text="b" />
              </TableRow>
              <TableRow>
                <TableCell text="c" />
                <TableCell text="d" />
              </TableRow>
            </TableBody>,
          ),
        ).container;
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should render rows', (): void => {
        expect(container.querySelectorAll('.table-body .table-cell').length).toEqual(4);
      });
    });
  });
});
