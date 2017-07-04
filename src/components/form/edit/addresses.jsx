import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray, reduxForm } from 'redux-form';
import { Button, Form, FormGroup } from 'react-bootstrap';
// eslint-disable-next-line
import * as actions from '../../../actions';

import Addresses from '../../form/addresses';
import validate from '../../form/validate';

const propTypes = {
  contentName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
  auxButton: PropTypes.bool,
  auxButtonLabel: PropTypes.string,
  submitLabel: PropTypes.string,
};

const defaultProps = {
  auxButtonLabel: null,
};

const FormEditAddresses = (props) => {
  const { contentName, handleSubmit, auxButton, auxButtonLabel, submitLabel } = props
  return (
    <Form id={contentName} inline onSubmit={handleSubmit}>
      {(auxButtonLabel) ? (
        <Button
          type="button"
          className="previous edit-in-place"
          onClick={auxButton}
        >
          {auxButtonLabel}
        </Button>
      ) : null}
      <FormGroup controlId="formInlineName">
        <FieldArray
          name="addresses"
          component={Addresses}
          shouldFocus
        />
      </FormGroup>
      <Button
        type="submit"
        className="next edit-in-place"
      >
        {submitLabel}
      </Button>
    </Form>
  );
};

FormEditAddresses.propTypes = propTypes;
FormEditAddresses.defaultProps = defaultProps;

export default reduxForm({
  destroyOnUnmount: false,
  validate,
})(FormEditAddresses);
