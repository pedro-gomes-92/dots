import React from 'react';
import { render } from '@testing-library/react';

import { Select } from '../Select';
import { SelectItem } from '../SelectItem';

describe('Given <Select />', (): void => {
  let container: HTMLElement;
  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(
        <Select>
          <SelectItem text="Testing 1" />
        </Select>,
      ).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses children', (): void => {
      it('Then should match the snapshot', (): void => {
        container = render(
          <Select>
            <SelectItem text="Testing 1" />
            <SelectItem text="Testing 2" />
          </Select>,
        ).container;
        expect(container).toMatchSnapshot();
      });
    });
  });
});
