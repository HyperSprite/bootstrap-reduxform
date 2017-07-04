import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel } from 'react-bootstrap';

import StaticPhoneNumber from '../static-phonenumber';

const propTypes = {
  content: PropTypes.array,
  setPage: PropTypes.func,
  thisPage: PropTypes.number,
};

const staticPhoneNumbers = ({ content = [], setPage, thisPage, formValues }) => {

  const setPageFunc = thisPage ?
    () => setPage(thisPage) :
    null;

  return (
    <div  onClick={setPageFunc} >
      <ControlLabel className="inline-this">Phone Numbers</ControlLabel>
      <ul>
        {content.map((pN) => {
          return (
            <li key={pN.phoneNumber} >
              <StaticPhoneNumber
                options={formValues.contentOptions}
                phoneType={pN.phoneType}
                phoneNumber={pN.phoneNumber}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

staticPhoneNumbers.propTypes = propTypes;

export default staticPhoneNumbers;
