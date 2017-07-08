import React from 'react';
import PropTypes from 'prop-types';

import Static from './static';

const propTypes = {
  locType: PropTypes.string,
  locStreet: PropTypes.string,
  locStreet2: PropTypes.string,
  locCity: PropTypes.string,
  locState: PropTypes.string,
  locCountry: PropTypes.string,
  locZip: PropTypes.string,
};

const renderAddressStatic = ({ locType, locStreet, locStreet2, locCity, locState, locCountry, locZip }) => {
  let addr = '';
  if (locStreet) addr = `${locStreet}, `;
  if (locStreet2) addr += `${locStreet2}, `;
  if (locCity) addr += `${locCity}, `;
  if (locState) addr += `${locState}, `;
  if (locCountry) addr += `${locCountry} `;
  if (locZip) addr += `${locZip} `;

  if (locType && locState) {
    return (
      <div
        className="inline-next static"
      >
        <Static
          content={addr}
          type="text"
          contentLabel={locType}
        />
      </div>
    );
  }
  return null;
};

renderAddressStatic.propTypes = propTypes;

export default renderAddressStatic;
