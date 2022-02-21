import React from 'react';
import PropTypes from 'prop-types';

import Service from './MyServices/Service';

const Service3 = ({ data }) => (
  <div className="service3">
    <div className="link-to" id="service3" />
    {data.map((service) => (
      <Service data={service} key={service.service} />
    ))}
  </div>
);

Service3.propTypes = {
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

Service3.defaultProps = {
  data: [],
};

export default Service3;
