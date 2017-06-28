import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { formValueSelector, reduxForm } from 'redux-form';
import * as actions from '../../actions';

import formValues from './form-values';
import Alert from '../form/alert';
import validate from '../form/validate';
import ViewStatic from '../form/view/static';
import EditInput from '../form/edit/input';
import EditPageLast from '../form/edit/page-last';

const relURL = '/apiv1/search';

const selector = formValueSelector('searchform');

const propTypes = {
  initialValues: PropTypes.object,
};

let SearchWizard = class SearchWizard extends Component {
  constructor() {
    super();
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.cancelFormEdit = this.cancelFormEdit.bind(this);
    this.state = {
      page: 1,
    };
  }

  componentDidMount() {
    this.props.fetchData('apiv1/search');
  }

  componentWillUnmount() {
    this.props.pageTransitionFalse();
  }

  handleFormSubmit(formProps) {
    this.props.postForm(formProps, `${relURL}`, 'FETCH_SEARCH');
  }

  cancelFormEdit() {
    () => <Redirect to="/" />;
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  renderAlert() {
    const { errorMessage } = this.props;
    return (errorMessage) ? (
      Object.keys(errorMessage).map(key => errorMessage[key]).map((eM) => {
        return Alert(eM.path, 'Opps', eM.message);
      })
    ) : (
      null
    );
  }

  render() {
    const {
      eventSelector,
      handleSubmit,
      transitionPage,
    } = this.props;

    const {
      page,
    } = this.state;

    // un-comment to force authenticated for this page
    // if (!authenticated) {
    //   return (
    //     <Redirect to="/signin" />
    //   );
    // }

    if (transitionPage) {
      return (
        <Redirect to="/search-results" />
      );
    }

    return (
      <div className="main-flex-container" >
        <div className="main-sidebar" />
        <div className="main form-main">
          <h1>Search</h1>
          {formValues.map((fV, i) => (
             page > i + 1 &&
             <ViewStatic
               key={fV.contentName}
               content={eventSelector[fV.contentName]}
               formValues={fV}
             />
          ))}
          {formValues.map((fV, i) => (
             page === i + 1 &&
             <EditInput
               key={fV.contentName}
               content={eventSelector[fV.contentName]}
               formValues={fV}
               onSubmit={this[fV.onSubmit]}
               submitLabel={fV.submitLabel}
               auxButton={this[fV.auxButton]}
               auxButtonLabel={fV.auxButtonLabel}
             />
          ))}
          { page === formValues.length + 1 &&
            <EditPageLast
              key={'lastPage'}
              formValues={{ contentName: 'lastpage' }}
              auxButton={this.previousPage}
              auxButtonLabel="Back"
              onSubmit={handleSubmit(this.handleFormSubmit)}
            />}
          { this.renderAlert() }
        </div>
        <div className="main-sidebar" />
      </div>
    );
  }
};

function mapStateToProps(state) {
  const initialValues = state.auth.user;
  return {
    authenticated: state.auth.authenticated,
    message: state.auth.message,
    transitionPage: state.page.transitionPage,
    initialValues,
    eventSelector: selector(state, 'drugName', 'drugDosage', 'drugForm', 'drugQuantity', 'drugUseGeneric', 'drugUseBranded'),
  };
}

SearchWizard = reduxForm({
  form: 'searchform',
  enableReinitialize: true,
  validate,
})(SearchWizard);

SearchWizard.propTypes = propTypes;

export default connect(mapStateToProps, actions)(SearchWizard);
