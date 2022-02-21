import React from 'react';
import PropTypes from 'prop-types';

const Service = ({ data }) => (
  <article className="services-container">
    <header>
      <h4>
        <a href={data.link} target="_blank">
          {data.service}
        </a>
      </h4>
    </header>
    {/* <p className="description">{data.description}</p> */}
    <ul className="points">
      {data.points && data.points.map((point) => <li key={point}>{point}</li>)}
    </ul>
  </article>
);

Service.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    sublink: PropTypes.string,
    subCompany: PropTypes.string,
    position: PropTypes.string.isRequired,
    location: PropTypes.string,
    daterange: PropTypes.string.isRequired,
    description: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Service;
