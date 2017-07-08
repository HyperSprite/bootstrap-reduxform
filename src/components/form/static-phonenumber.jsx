import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  phoneNumber: PropTypes.string,
  phoneType: PropTypes.string,
};

const renderStatic = ({ phoneNumber, phoneType  }) => {
  if (phoneType && phoneNumber) {
    return (
      <div className="static-list" >
        <span className="static-label inline">{phoneType}</span><span className="static-txt">{phoneNumber}</span>
      </div>
    );
  }
  return null;
};

renderStatic.propTypes = propTypes;

export default renderStatic;
