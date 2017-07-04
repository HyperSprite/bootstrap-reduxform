import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, ButtonGroup, Form, FormGroup } from 'react-bootstrap';
// eslint-disable-next-line
import * as actions from '../../../actions';

import validate from '../../form/validate';

const WizardInput = (props) => {
  const { content, formValues, handleSubmit, auxButton, auxButtonLabel, pristine, submitting, submitLabel } = props;
  console.log('formValues', formValues, content);
  return (
    <div className="form-container">
      <Form id={formValues.contentName} onSubmit={handleSubmit}>
        <FormGroup className="inline-next form-left">
          <Field
            // {...props}
            content={content}
            formValues={formValues}
            component={props.component}
            label={formValues.contentLabel}
            name={formValues.contentName}
            type={formValues.contentType}
            checked={formValues.content}
            shouldFocus
          />
        </FormGroup>
        <ButtonGroup className="edit-in-place form-right">
          <Button
            type="submit"
            bsStyle="primary"
            bsSize="large"
            className="next"
            disabled={pristine || submitting}
          >
            {submitLabel}
          </Button>
          {(auxButtonLabel) ? (
            <Button
              type="button"
              bsStyle="info"
              bsSize="large"
              className="previous"
              onClick={auxButton}
            >
              {auxButtonLabel}
            </Button>
            ) : null}
        </ButtonGroup>
      </Form>
    </div>
  );
};

export default reduxForm({
  // form: 'formdata',
  destroyOnUnmount: false,
  validate,
})(WizardInput);
