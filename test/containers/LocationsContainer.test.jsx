/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import {
  fireEvent,
  waitFor,
  screen
} from '@testing-library/react';

// Containers
import { LocationsContainer } from '../../src/containers';

// Actions
import { openLocationAction } from '../../src/actions';

// Mocks
import { data } from '../__mock__/locationsData';

const mockStore = configureStore();

describe('LocationsContainer containter tests', () => {
  describe('render container', () => {
    let container = null;
    let store;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
      store = mockStore({
        dispatch: jest.fn(),
        locations: {
          list: [],
          loading: false,
          details: {}
        }
      });
    });

    afterEach(() => {
      // cleanup on exiting
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });

    it('should render a component', () => {
      act(() => {
        render(
          <Provider store={ store }>
            <LocationsContainer />
          </Provider>,
          container
        );
      });

      expect(pretty(container.innerHTML)).toMatchSnapshot();
    });

    it('should render a component with loader', async () => {
      store = mockStore({
        dispatch: jest.fn(),
        locations: {
          list: [],
          loading: true,
          details: {}
        }
      });

      render(
        <LocationsContainer
          store={ {
            ...store,
            locations: {
              ...store.locations,
              loading: true
            },
            dispatch: jest.fn()
          } }
          getLocations={ jest.fn() }
        />,
        container
      );

      const { innerHTML } = container;
      expect(pretty(innerHTML)).toMatchSnapshot();
      expect(screen.getByTestId('loader')).toBeInTheDocument();
    });

    it('should render a component with the data', async () => {
      store = mockStore({
        dispatch: jest.fn(),
        locations: {
          list: data,
          loading: false,
          details: {}
        }
      });

      render(
        <LocationsContainer
          store={ {
            ...store,
            locations: {
              ...store.locations,
              loading: true
            },
            dispatch: jest.fn()
          } }
          getLocations={ jest.fn() }
        />,
        container
      );

      const { innerHTML } = container;
      expect(pretty(innerHTML)).toMatchSnapshot();
      const location = data[0];
      expect(
        screen.getByTestId(`location-name-${location.id}`)
      ).toBeInTheDocument();
      expect(screen.getByText(location.name)).toBeInTheDocument();
    });

    it('should render a component with a location details', async () => {
      const location = data[0];
      store = mockStore({
        dispatch: jest.fn(),
        locations: {
          list: data,
          loading: false,
          details: {
            ...location,
            views: 0
          }
        }
      });

      render(
        <LocationsContainer
          store={ {
            ...store,
            locations: {
              ...store.locations,
              details: {},
              loading: false
            },
            dispatch: jest.fn()
          } }
          getLocations={ jest.fn() }
        />,
        container
      );

      await waitFor(() => {
        const button = screen.queryByTestId(`edit-button-${location.id}`);
        // button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        fireEvent.click(button);
      });

      expect(
        screen.queryByTestId(`location-name-${location.id}`)
      ).toBeInTheDocument();
    });
  });

  describe('events', () => {
    let container = null;
    let store;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
      store = mockStore({
        dispatch: jest.fn(),
        locations: {
          list: [],
          loading: false,
          details: {}
        }
      });
      jest.useFakeTimers();
    });

    afterEach(() => {
      // cleanup on exiting
      unmountComponentAtNode(container);
      container.remove();
      container = null;
      jest.useRealTimers();
    });

    it('should open modal on location edit', async () => {
      store = mockStore({
        dispatch: jest.fn(),
        locations: {
          list: data,
          loading: false,
          details: {}
        }
      });

      act(() => {
        render(
          <LocationsContainer
            store={ {
              ...store,
              locations: {
                ...store.locations,
                loading: true
              }
            } }
            getLocations={ jest.fn() }
          />,
          container
        );
      });

      const { innerHTML } = container;
      expect(pretty(innerHTML)).toMatchSnapshot();
      const location = data[0];
      const viewsElement = screen.getByTestId(`location-views-${location.id}`);
      expect(viewsElement).toBeInTheDocument();
      expect(screen.getByText(location.name)).toBeInTheDocument();
      const button = container.querySelector('button');

      await act(async () => {
        await button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });

      const actions = store.getActions();
      const openAction = openLocationAction({
        id: location.id
      });

      expect(actions).toContainEqual(openAction);
    });
  });
});
