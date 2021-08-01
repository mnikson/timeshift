/**
 * @file PageLayout
 * @description Page Layout Component
 */

// Libs
import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

// Components
import { Header } from '..';

// Utils
import { APP } from '../../utils/constants';

// Styles
import styles from './PageLayout.less';

const {
  Content
} = Layout;

/**
 * @class PageLayout
 */
class PageLayout extends React.Component {

  static propTypes = {
    /**
     * children element
     */
    children: PropTypes.node,
    /**
     * component custom class
     */
    contentClassName: PropTypes.string
  };

  static defaultProps = {
    children: null,
    contentClassName: ''
  }

  render() {
    const {
      children,
      contentClassName
    } = this.props;

    return (
      <>
        <Layout className={ styles.layout }>
          <Header
            title={ APP.TITLE }
            subtitle={ APP.SUBTITLE }
          />
          <Content className={ styles.content }>
            <div className={ `${styles['content-wrapper']} ${contentClassName}` }>
              { children }
            </div>
          </Content>
        </Layout>
      </>
    );
  }

}

export default PageLayout;
