import React from 'react';
import { reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';

import * as actions from '../../../actions';

import validate from '../../form/validate';

const UserWizardPageLast = (props) => {
  const { contentName, handleSubmit, pristine, submitting, auxButton, auxButtonLabel } = props
  return (
    <form id={contentName} onSubmit={handleSubmit}>
      {/* { renderAlert() } */}
      <div>
        {(auxButtonLabel) ? (
          <Button
            type="button"
            className="previous edit-in-place"
            onClick={auxButton}
          >
            {auxButtonLabel}
          </Button>
        ) : null}
        <Button
          type="submit"
          className="edit-in-place"
          disabled={pristine || submitting}
        >
          Submit
        </Button>
          <Button>
            Cancel
          </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'userdata',
  destroyOnUnmount: false,
  validate,
})(UserWizardPageLast);
