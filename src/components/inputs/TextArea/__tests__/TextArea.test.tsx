import React from 'react';
import { render } from '@testing-library/react';

import { TextArea } from '../TextArea';

describe('Given <TextArea />', (): void => {
  let container: HTMLElement;
  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(<TextArea />).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses rows', (): void => {
      it('Then should match the snapshot', (): void => {
        container = render(<TextArea rows={10} />).container;
        expect(container).toMatchSnapshot();
      });
    });

    describe('And uses hasFixedSize', (): void => {
      beforeEach((): void => {
        container = render(<TextArea hasFixedSize />).container;
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should not be resizable', (): void => {
        expect(container.querySelector('textarea').classList).toContainEqual('has-fixed-size');
      });
    });
  });
});
