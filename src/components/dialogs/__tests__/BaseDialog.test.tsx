import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { BaseDialog } from '../BaseDialog';

describe('Given <BaseDialog />', (): void => {
  let container: HTMLElement;
  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(<BaseDialog />).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses onClose', (): void => {
      let handleClose: jest.Mock;
      let close: HTMLElement;

      beforeEach((): void => {
        handleClose = jest.fn();
        container = render(<BaseDialog onClose={handleClose} />).container;
        close = container.querySelector('.close');

        fireEvent.click(close);
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should render close button', (): void => {
        expect(close).toBeTruthy();
      });

      it('And should hide the dialog', (): void => {
        expect(container.querySelector('.dialog').classList).toContainEqual('is-hidden');
      });

      it('And should trigger onClose', (): void => {
        expect(handleClose).toHaveBeenCalledTimes(1);
      });
    });

    describe('And uses onOutsideClick', (): void => {
      let handleOutsideClick: jest.Mock;
      let overlay: HTMLElement;

      beforeEach((): void => {
        handleOutsideClick = jest.fn();
        container = render(<BaseDialog onOutsideClick={handleOutsideClick} />).container;
        overlay = container.querySelector('.overlay');

        fireEvent.click(overlay);
      });

      it('Then should hide the dialog', (): void => {
        expect(container.querySelector('.dialog').classList).toContainEqual('is-hidden');
      });

      it('And should trigger onOutsideClick', (): void => {
        expect(handleOutsideClick).toHaveBeenCalledTimes(1);
      });
    });
  });
});
