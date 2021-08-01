/**
 * @jest-environment jsdom
 */
import React from 'react';
// import { render, screen } from '@testing-library/react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

// Components
import { PageLayout } from '../../src/components';

describe('PageLayout component tests', () => {
  describe('render component', () => {
    let container = null;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      // cleanup on exiting
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });

    it('should render a component', () => {
      // let container;
      act(() => {
        render(
          <PageLayout contentClassName="content-class">
            <p>Content test</p>
          </PageLayout>,
          container
        );
      });

      expect(pretty(container.innerHTML)).toMatchSnapshot();
    });
  });
});
