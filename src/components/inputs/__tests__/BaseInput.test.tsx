import React from 'react';
import { render, fireEvent, getByDisplayValue, getByPlaceholderText } from '@testing-library/react';

import { BaseInput } from '../BaseInput';

describe('Given <BaseInput />', (): void => {
  let container: HTMLElement;
  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(<BaseInput />).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses value', (): void => {
      beforeEach((): void => {
        container = render(<BaseInput value="Testing" />).container;
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should update model', (): void => {
        expect(getByDisplayValue(container, 'Testing')).toBeTruthy();
      });
    });

    describe('And uses isReadOnly', (): void => {
      beforeEach((): void => {
        container = render(<BaseInput isReadOnly />).container;
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should be readonly', (): void => {
        const input = getByDisplayValue(container, '') as HTMLInputElement;
        expect(input.readOnly).toBeTruthy();
      });
    });

    describe('And uses model', (): void => {
      beforeEach((): void => {
        container = render(<BaseInput model="email" />).container;
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should have name', (): void => {
        const input = getByDisplayValue(container, '') as HTMLInputElement;
        expect(input.name).toEqual('email');
      });
    });

    describe('And uses placeHolder', (): void => {
      beforeEach((): void => {
        container = render(<BaseInput placeHolder="Testing" />).container;
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should have a placeholder', (): void => {
        expect(getByPlaceholderText(container, 'Testing')).toBeTruthy();
      });
    });

    describe('And uses type="date"', (): void => {
      it('Then should match the snapshot', (): void => {
        container = render(<BaseInput type="date" />).container;
        expect(container).toMatchSnapshot();
      });
    });

    describe('And uses type="datetime"', (): void => {
      it('Then should match the snapshot', (): void => {
        container = render(<BaseInput type="datetime" />).container;
        expect(container).toMatchSnapshot();
      });
    });

    describe('And uses type="time"', (): void => {
      it('Then should match the snapshot', (): void => {
        container = render(<BaseInput type="time" />).container;
        expect(container).toMatchSnapshot();
      });
    });

    describe('And uses type="email"', (): void => {
      it('Then should match the snapshot', (): void => {
        container = render(<BaseInput type="email" />).container;
        expect(container).toMatchSnapshot();
      });
    });

    describe('And uses type="radio"', (): void => {
      it('Then should match the snapshot', (): void => {
        container = render(<BaseInput type="radio" />).container;
        expect(container).toMatchSnapshot();
      });
    });

    describe('And uses type="checkbox"', (): void => {
      it('Then should match the snapshot', (): void => {
        container = render(<BaseInput type="checkbox" />).container;
        expect(container).toMatchSnapshot();
      });
    });

    describe('And uses type="file"', (): void => {
      it('Then should match the snapshot', (): void => {
        container = render(<BaseInput type="file" />).container;
        expect(container).toMatchSnapshot();
      });
    });

    describe('And uses type="hidden"', (): void => {
      it('Then should match the snapshot', (): void => {
        container = render(<BaseInput type="hidden" />).container;
        expect(container).toMatchSnapshot();
      });
    });

    describe('And uses type="password"', (): void => {
      it('Then should match the snapshot', (): void => {
        container = render(<BaseInput type="password" />).container;
        expect(container).toMatchSnapshot();
      });
    });

    describe('And uses type="seach"', (): void => {
      it('Then should match the snapshot', (): void => {
        container = render(<BaseInput type="search" />).container;
        expect(container).toMatchSnapshot();
      });
    });
  });

  describe('When changes value', (): void => {
    it('Then should trigger onChange', (): void => {
      const handleChange = jest.fn();
      container = render(<BaseInput value="Testing" onChange={handleChange} />).container;
      const input = getByDisplayValue(container, 'Testing') as HTMLInputElement;
      fireEvent.change(input, { target: { value: 'Testing 2' } });

      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });
});
