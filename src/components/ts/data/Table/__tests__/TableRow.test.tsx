import React from 'react';
import { render } from '@testing-library/react';

import { TableRow } from '../TableRow';
import { TableCell } from '../TableCell';

describe('Given <TableRow />', (): void => {
  let container: HTMLElement;
  const addTableHTML = (content: JSX.Element): JSX.Element => (
    <table>
      <tbody>{content}</tbody>
    </table>
  );

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(
        addTableHTML(
          <TableRow>
            <TableCell text="a" />
          </TableRow>,
        ),
      ).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses children', (): void => {
      beforeEach((): void => {
        container = render(
          addTableHTML(
            <TableRow>
              <TableCell text="a" />
              <TableCell text="b" />
            </TableRow>,
          ),
        ).container;
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should render rows', (): void => {
        expect(container.querySelectorAll('.table-cell').length).toEqual(2);
      });
    });
  });
});
