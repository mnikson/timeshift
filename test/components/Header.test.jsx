/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

// Components
import { Header } from '../../src/components';

// Utils
import { APP } from '../../src/utils/constants';

describe('Header component', () => {
  describe('render', () => {
    const props = {
      title: 'All locations',
      subtitle: 'Acme locations'
    };

    it('should render title and subtitle on component', () => {
      render(
        <Header { ...props } />
      );

      const title = screen.getByText(APP.TITLE);
      expect(title).toBeInTheDocument();
      const subtitle = screen.getByText(APP.SUBTITLE);
      expect(subtitle).toBeInTheDocument();
    });

    it('should render component', () => {
      const { container } = render(
        <Header { ...props } />
      );

      expect(container).toMatchSnapshot();
    });
  });
});
