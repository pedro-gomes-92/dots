import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { ModalHeader } from '../ModalHeader';

describe('Given <ModalHeader />', (): void => {
  let container: HTMLElement;

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(<ModalHeader />).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses onClose', (): void => {
      let handleClose: jest.Mock;
      let close: HTMLElement;

      beforeEach((): void => {
        handleClose = jest.fn();
        container = render(<ModalHeader onClose={handleClose} />).container;
        close = container.querySelector('.close');

        fireEvent.click(close);
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should render close button', (): void => {
        expect(close).toBeTruthy();
      });

      it('And should trigger onClose', (): void => {
        expect(handleClose).toHaveBeenCalledTimes(1);
      });
    });
  });
});
