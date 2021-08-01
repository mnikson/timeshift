/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

// Components
import App from '../../src/components/App';

// Mocks
const mockStore = configureStore();
const store = mockStore({
  locations: {
    list: [],
    loading: false,
    details: {}
  }
});
const props = {
  store
};

describe('App component tests', () => {
  describe('Render', () => {
    it('should render title and subtitle on component', () => {
      render(
        <Provider store={ store }>
          <App { ...props } />
        </Provider>
      );
      const subtitleElement = screen.getByText(/all locations/i);
      expect(subtitleElement).toBeInTheDocument();
      const titleElement = screen.getByText(/acme locations/i);
      expect(titleElement).toBeInTheDocument();
    });
  });

  it('should render component', () => {
    Object.assign(props, { store });

    const { container } = render(
      <Provider store={ store }>
        <App { ...props } />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
