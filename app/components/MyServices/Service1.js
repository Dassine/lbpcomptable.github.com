import React from 'react';
import PropTypes from 'prop-types';

import Service from './MyServices/Service';

const Service1 = ({ data }) => (
  <div className="service1">
    <div className="link-to" id="service1" />
    {data.map((service) => (
      <Service data={service} key={service.service} />
    ))}
  </div>
);

Service1.propTypes = {
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

Service1.defaultProps = {
  data: [],
};

export default Service1;
