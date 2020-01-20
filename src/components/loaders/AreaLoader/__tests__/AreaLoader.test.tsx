import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { AreaLoader } from '../AreaLoader';

describe('Given <AreaLoader />', (): void => {
  let container: HTMLElement;
  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(<AreaLoader />).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses hasOverlay', (): void => {
      let overlay: HTMLElement;
      beforeEach((): void => {
        container = render(<AreaLoader hasOverlay />).container;
        overlay = container.querySelector('.overlay');
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should render an overlay', (): void => {
        expect(overlay).toBeTruthy();
      });

      describe('And uses onOutsideClick', (): void => {
        let handleOutsideClick: jest.Mock;

        beforeEach((): void => {
          handleOutsideClick = jest.fn();
          container = render(<AreaLoader hasOverlay onOutsideClick={handleOutsideClick} />).container;
          overlay = container.querySelector('.overlay');

          fireEvent.click(overlay);
        });

        it('Then should trigger onOutsideClick', (): void => {
          expect(handleOutsideClick).toHaveBeenCalledTimes(1);
        });

        it('And should hide the loader', (): void => {
          expect(container.querySelector('.loaders.is-area').classList).toContainEqual('is-hidden');
        });
      });
    });
  });
});
