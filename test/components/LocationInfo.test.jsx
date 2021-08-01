/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

// Components
import { LocationInfo } from '../../src/components';

// Mock
import { data } from '../__mock__/locationsData';

describe('LocationInfo component tests', () => {
  it('should render component', () => {
    const location = data[0];
    const viewsCount = 20;

    render(
      <LocationInfo
        date={ location.createdAt }
        name={ location.name }
        views={ viewsCount }
        description={ location.description }
        userCount={ location.userCount }
      />
    );
    const name = screen.getByText(location.name);
    expect(name).toBeInTheDocument();
    const description = screen.getByText(location.description);
    expect(description).toBeInTheDocument();
    const userCount = screen.getByText(`${location.userCount} Users`);
    expect(userCount).toBeInTheDocument();
    const views = screen.getByText(`${viewsCount} Views`);
    expect(views).toBeInTheDocument();
  });

  it('should render component without name', () => {
    const location = data[0];
    const viewsCount = 20;

    render(
      <LocationInfo
        date={ location.createdAt }
        views={ viewsCount }
        description={ location.description }
        userCount={ location.userCount }
      />
    );
    const name = screen.queryByText(location.name);
    expect(name).toBeNull();
  });

  it('should render component without description', () => {
    const location = data[0];
    const viewsCount = 20;

    const { container } = render(
      <LocationInfo
        name={ location.name }
        description={ location.description }
        date={ location.createdAt }
        views={ viewsCount }
        userCount={ location.userCount }
      />
    );

    expect(container).toMatchSnapshot();
  });
});
