import React from 'react';
import { render } from '@testing-library/react';
import { FormatCurrency } from '@dots/core';

import { CalculationList } from '../CalculationList';

describe('Given <CalculationList />', (): void => {
  let container: HTMLElement;
  let getFormattedValues: (container: HTMLElement) => string[];
  let getValues: (container: HTMLElement) => number[];
  let getLabels: (container: HTMLElement) => string[];
  let values: number[];

  beforeAll((): void => {
    const itemsQuery = '.list-calculation-item';

    getLabels = (container: HTMLElement): string[] => {
      return [...container.querySelectorAll(`${itemsQuery} .is-primary`)].map((item): string => item.textContent);
    };

    getFormattedValues = (container: HTMLElement): string[] => {
      return [...container.querySelectorAll(`${itemsQuery} .is-secondary`)].map((item): string => item.textContent);
    };

    getValues = (container: HTMLElement): number[] => {
      return getFormattedValues(container).map((item): number => parseInt(item));
    };
  });

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      container = render(<CalculationList labels={['Test']} />).container;
      expect(container).toMatchSnapshot();
    });

    describe('And uses labels', (): void => {
      beforeEach((): void => {
        container = render(<CalculationList labels={['Test 1', 'Test 2']} />).container;
        values = getValues(container);
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should have the correct number of items', (): void => {
        expect(values).toHaveLength(3);
      });

      it('And should render a text for each label', (): void => {
        expect(getLabels(container)).toEqual(['Test 1', 'Test 2', 'Result']);
      });

      it('And should have default values for each item', (): void => {
        expect(values.every((item): boolean => item === 0)).toBeTruthy();
      });

      describe('And uses values', (): void => {
        beforeEach((): void => {
          container = render(<CalculationList labels={['Test 1', 'Test 2']} values={[1, 2]} />).container;
          values = getValues(container);
        });

        it('Then should match the snapshot', (): void => {
          expect(container).toMatchSnapshot();
        });

        it('And should have the correct number of items', (): void => {
          expect(values).toHaveLength(3);
        });

        it('And should have the corresponding values', (): void => {
          expect(values).toEqual([1, 2, 3]);
        });
      });
    });

    describe('And uses values', (): void => {
      beforeEach((): void => {
        container = render(<CalculationList labels={['Test']} values={[1, 2, 3, 4, 5]} />).container;
        values = getValues(container);
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should have the correct number of items', (): void => {
        expect(values).toHaveLength(2);
      });

      it('And should have the corresponding values', (): void => {
        expect(values).toEqual([1, 1]);
      });
    });

    describe('And uses onFormat', (): void => {
      let items: string[];

      beforeEach((): void => {
        container = render(
          <CalculationList
            labels={['Test 1', 'Test 2']}
            values={[1, 2]}
            onFormat={(value): string => FormatCurrency.format(value)}
          />,
        ).container;

        items = getFormattedValues(container);
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should format each item value', (): void => {
        expect(items).toEqual(['€1.00', '€2.00', '€3.00']);
      });
    });

    describe('And uses resultLabel', (): void => {
      beforeEach((): void => {
        container = render(<CalculationList labels={['Test 1', 'Test 2']} values={[1, 2]} resultLabel="New balance" />)
          .container;
      });

      it('Then should match the snapshot', (): void => {
        expect(container).toMatchSnapshot();
      });

      it('And should change the label for result', (): void => {
        expect(getLabels(container)[2]).toEqual('New balance');
      });
    });
  });
});
