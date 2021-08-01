/**
 * @file LocationsContainer
 * @description Locations container
 */

// Libs
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Button,
  Empty,
  Modal
} from 'antd';

// Actions
import {
  getLocationsAction, openLocationAction
} from '../../actions';

// Components
import { Loading, LocationInfo, PageLayout } from '../../components';

// Styles
import styles from './LocationsContainer.less';

// Constants
const BUTTON_LABEL = 'Done';

/**
 * @class LocationsContainer
 */
class LocationsContainer extends React.Component {

  static propTypes = {
    /**
     * Get locations
     */
    getLocations: PropTypes.func,
    /**
     * Locations data
     */
    locations: PropTypes.shape({
      details: PropTypes.object,
      list: PropTypes.array,
      loading: PropTypes.bool
    }),
    /**
     * Open location
     */
    openLocation: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  componentDidMount() {
    this.props.getLocations();
  }

  shouldComponentUpdate(nextProps = {}) {
    const { locations: { list } } = this.props;

    // eslint-disable-next-line react/prop-types
    return !_.isEqual(nextProps.list, list);
  }

  /**
   * Handle on open location
   * @param {String} id - Location ID
   */
  handleOnLocationOpen = id => {
    // open location by id
    this.props.openLocation(id);

    this.setState({
      showModal: true
    });
  }

  /**
   * Handle on close modal
   */
  handleOnCloseModal = () => {
    this.setState({
      showModal: false
    });
  }

  /**
   * Render content
   * @returns {Object} - Content
   */
  renderContent = () => {
    const {
      locations: {
        list,
        loading = false
      }
    } = this.props;

    if (loading) {
      return (
        <Loading />
      );
    }

    if (_.isEmpty(list)) {
      return (
        <Empty description="No Locations." />
      );
    }

    return (
      <div className={ styles['location-container'] }>
        { list.map(location => (
          <div
            className={ styles['location-item'] }
            key={ location.id }>
            <LocationInfo
              id={ location.id }
              name={ location.name }
              date={ location.createdAt }
              userCount={ location.userCount }
              views={ location.views }
            />
            <button
              data-testid={ `edit-button-${location.id}` }
              type="button"
              className={ styles['edit-icon'] }
              onClick={ () => this.handleOnLocationOpen(location.id) }>
              <img src="/assets/Edit.svg" alt="Edit" />
            </button>
          </div>
        )) }
      </div>
    );
  }

  /**
   * Render modal
   * @returns {Object} - Component
   */
  renderModal = () => {
    const { locations: { details = {} } } = this.props;
    const { showModal } = this.state;
    const footer = [
      <Button
        className={ styles['ok-button'] }
        key="ok"
        onClick={ this.handleOnCloseModal }>
        { BUTTON_LABEL }
      </Button>
    ];
    const closeIcon = (
      <img alt="Close" src="/assets/Close.svg" />
    );
    const width = 440;

    return (
      <Modal
        className={ styles.modal }
        centered
        visible={ showModal }
        onCancel={ this.handleOnCloseModal }
        footer={ footer }
        closeIcon={ closeIcon }
        title={ details.name }
        width={ width }>
        <LocationInfo
          date={ details.createdAt }
          userCount={ details.userCount }
          views={ details.views }
          description={ details.description }
        />
      </Modal>
    );
  }

  render() {
    return (
      <PageLayout>
        { this.renderContent() }
        { this.renderModal() }
      </PageLayout>
    );
  }

}

const mapStateToProps = state => ({
  locations: state.locations
});

const mapDispatchToProps = dispatch => ({
  getLocations: () => dispatch(getLocationsAction()),
  openLocation: id => dispatch(openLocationAction({ id }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationsContainer);
