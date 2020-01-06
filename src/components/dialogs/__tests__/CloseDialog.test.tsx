import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { CloseDialog } from '../CloseDialog';

describe('Given <CloseDialog />', (): void => {
  let container: HTMLElement;
  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(<CloseDialog onClick={(): void => {}} />).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses onClick', (): void => {
      it('Then should trigger onClick', (): void => {
        const handleClick = jest.fn();
        container = render(<CloseDialog onClick={handleClick} />).container;

        const close = container.querySelector('.dialog-close');

        fireEvent.click(close);

        expect(handleClick).toHaveBeenCalledTimes(1);
      });
    });
  });
});
