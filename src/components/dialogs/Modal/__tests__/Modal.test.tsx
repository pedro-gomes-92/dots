import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Modal } from '../Modal';
import { Text } from '../../../text';
import { Button } from '../../../actions';

describe('Given <Modal />', (): void => {
  let container: HTMLElement;

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(
        <Modal>
          <Text text="Testing" />
        </Modal>,
      ).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses title', (): void => {
      beforeEach((): void => {
        container = render(
          <Modal title="Testing Title">
            <Text text="Testing" />
          </Modal>,
        ).container;
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should render a title on ModalHeader', (): void => {
        expect(container.querySelector('.modal-header .title').textContent).toEqual('Testing Title');
      });
    });

    describe('And uses onClose', (): void => {
      let handleClose: jest.Mock;
      let close: HTMLElement;

      beforeEach((): void => {
        handleClose = jest.fn();
        container = render(
          <Modal onClose={handleClose}>
            <Text text="Testing" />
          </Modal>,
        ).container;
        close = container.querySelector('.modal-header .close');

        fireEvent.click(close);
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should render close button on ModalHeader', (): void => {
        expect(close).toBeDefined();
      });

      it('And should trigger onClose', (): void => {
        expect(handleClose).toHaveBeenCalledTimes(1);
      });
    });

    describe('And uses actions', (): void => {
      beforeEach((): void => {
        container = render(
          <Modal
            actions={
              <>
                <Button onClick={(): void => {}} text="Testing Action" />
              </>
            }
          >
            <Text text="Testing" />
          </Modal>,
        ).container;
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should render a actions on ModalFooter', (): void => {
        expect(container.querySelector('.modal-footer .button').textContent).toEqual('Testing Action');
      });
    });
  });
});
