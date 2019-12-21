import React from 'react';
import { render } from '@testing-library/react';

import { SelectItem } from '../SelectItem';

describe('Given <SelectItem />', (): void => {
  let container: HTMLElement;

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      const { container } = render(<SelectItem text="Testing" />);
      expect(container).toMatchSnapshot();
    });

    describe('And uses value', (): void => {
      beforeEach((): void => {
        container = render(<SelectItem text="Testing" value="ts" />).container;
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should update model', (): void => {
        expect((container.querySelector('option') as HTMLOptionElement).value).toEqual('ts');
      });
    });
  });
});
