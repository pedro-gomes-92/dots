import React from 'react';
import { render } from '@testing-library/react';

import { PaginationNext } from '../PaginationNext';

describe('Given <PaginationNext />', (): void => {
  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      const { container } = render(<PaginationNext onClick={(): void => {}} />);
      expect(container).toMatchSnapshot();
    });
  });
});
