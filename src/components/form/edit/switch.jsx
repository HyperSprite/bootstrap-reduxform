import React from 'react';
import PropTypes from 'prop-types';

import Addresses from '../addresses';
import Input from '../input';
import PhoneNumber from '../phonenumber';

import EditAddresses from './addresses';
import EditInput from './input';
import EditPhoneNumbers from './phonenumbers';
// import EditPhoneNumbers from './input-phoneNumbers';

const propTypes = {

};

const EditSwitch = (props) => {
  switch (props.formValues.componentType) {
    case 'Input':
      return <EditInput {...props} component={Input} />;
    case 'PhoneNumbers':
    console.log('props', props)
      return <EditPhoneNumbers {...props} options={props.formValues.contentOptions} component={PhoneNumber} />;
    case 'Addresses':
      return <EditAddresses {...props} component={Addresses} />;
    default:
      return null;
  }
};

EditSwitch.propTypes = propTypes;

export default EditSwitch;
