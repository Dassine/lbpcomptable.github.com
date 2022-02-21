import React from 'react';
import PropTypes from 'prop-types';

import Service from './MyServices/Service';

const Service2 = ({ data }) => (
  <div className="service2">
    <div className="link-to" id="service2" />
    {data.map((service) => (
      <Service data={service} key={service.service} />
    ))}
  </div>
);

Service2.propTypes = {
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

Service2.defaultProps = {
  data: [],
};

export default Service2;
