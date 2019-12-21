import React from 'react';
import { render } from '@testing-library/react';

import { PaginationPrevious } from '../PaginationPrevious';

describe('Given <PaginationPrevious />', (): void => {
  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      const { container } = render(<PaginationPrevious onClick={(): void => {}} />);
      expect(container).toMatchSnapshot();
    });
  });
});
