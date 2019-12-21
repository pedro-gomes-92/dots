import React from 'react';
import { render } from '@testing-library/react';

import { TableCell } from '../TableCell';

describe('Given <TableRow />', (): void => {
  const addTableHTML = (content: JSX.Element): JSX.Element => (
    <table>
      <tbody>
        <tr>{content}</tr>
      </tbody>
    </table>
  );

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      const { container } = render(addTableHTML(<TableCell text="" />));
      expect(container).toMatchSnapshot();
    });

    describe('And uses text', (): void => {
      it('Then should render text value', (): void => {
        const { container } = render(addTableHTML(<TableCell text="a" />));
        expect(container.querySelector('.text').textContent).toEqual('a');
      });
    });
  });
});
