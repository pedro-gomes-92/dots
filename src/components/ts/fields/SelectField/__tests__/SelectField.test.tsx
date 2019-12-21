import React from 'react';
import { render } from '@testing-library/react';

import { SelectField } from '../SelectField';
import { SelectItem } from '../../../inputs';

describe('Given <SelectField />', (): void => {
  let container: HTMLElement;
  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(
        <SelectField>
          <SelectItem text="Testing" />
        </SelectField>,
      ).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses children', (): void => {
      it('Then should match the snapshot', (): void => {
        container = render(
          <SelectField>
            <SelectItem text="Testing 1" />
            <SelectItem text="Testing 2" />
          </SelectField>,
        ).container;
        expect(container).toMatchSnapshot();
      });
    });
  });
});
