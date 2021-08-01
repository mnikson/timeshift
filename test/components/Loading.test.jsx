/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

// Components
import { Loading } from '../../src/components';

describe('Loading component tests', () => {
  it('should render component with loader', () => {
    render(<Loading />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('should render component', () => {
    const { container } = render(
      <Loading />
    );

    expect(container).toMatchSnapshot();
  });
});
