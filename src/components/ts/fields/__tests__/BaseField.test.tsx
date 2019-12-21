import React from 'react';
import { render } from '@testing-library/react';

import { BaseField } from '../BaseField';
import { TextInput, DateInput } from '../../inputs';

describe('Given <BaseField />', (): void => {
  let container: HTMLElement;
  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(
        <BaseField>
          <TextInput />
        </BaseField>,
      ).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses children', (): void => {
      it('Then should match the snapshot', (): void => {
        container = render(
          <BaseField>
            <TextInput />
            <DateInput />
          </BaseField>,
        ).container;
        expect(container).toMatchSnapshot();
      });
    });

    describe('And uses label', (): void => {
      beforeEach((): void => {
        container = render(
          <BaseField label="Testing">
            <TextInput />
          </BaseField>,
        ).container;
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should render a label', (): void => {
        expect(container.querySelector('label.label').textContent).toEqual('Testing');
      });
    });

    describe('And uses hint', (): void => {
      beforeEach((): void => {
        container = render(
          <BaseField hint="Testing">
            <TextInput />
          </BaseField>,
        ).container;
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should render a hint', (): void => {
        expect(container.querySelector('.help').textContent).toEqual('Testing');
      });
    });
  });
});
