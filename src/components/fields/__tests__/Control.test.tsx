import React from 'react';
import { render } from '@testing-library/react';

import { Control } from '../Control';
import { TextInput, DateInput } from '../../inputs';

describe('Given <Control />', (): void => {
  let container: HTMLElement;
  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(
        <Control>
          <TextInput />
        </Control>,
      ).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses children', (): void => {
      it('Then should match the snapshot', (): void => {
        container = render(
          <Control>
            <TextInput />
            <DateInput />
          </Control>,
        ).container;
        expect(container).toMatchSnapshot();
      });
    });
  });
});
