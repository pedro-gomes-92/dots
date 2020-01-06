import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Overlay } from '../Overlay';

describe('Given <Overlay />', (): void => {
  let container: HTMLElement;
  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(<Overlay />).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses onClick', (): void => {
      it('Then should trigger onClick', (): void => {
        const handleClick = jest.fn();
        container = render(<Overlay onClick={handleClick} />).container;

        const overlay = container.querySelector('.overlay');

        fireEvent.click(overlay);

        expect(handleClick).toHaveBeenCalledTimes(1);
      });
    });
  });
});
