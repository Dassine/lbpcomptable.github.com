import React from 'react';
import PropTypes from 'prop-types';

import Service from './MyServices/Service';

const Service4 = ({ data }) => (
  <div className="service4">
    <div className="link-to" id="service4" />
    {data.map((service) => (
      <Service data={service} key={service.service} />
    ))}
  </div>
);

Service4.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      position: PropTypes.string,
      link: PropTypes.string,
      daterange: PropTypes.string,
      points: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

Service4.defaultProps = {
  data: [],
};

export default Service4;
