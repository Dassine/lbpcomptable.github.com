import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const Navgator = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/lbp-logo.jpg`} alt="" />
      </Link>
      <header>
        <h2>Services Comptables LBP</h2>
        <p>
          <a href="mailto:contact@lbpcomptable.ca">contact@lbpcomptable.ca</a>
        </p>
      </header>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((contact) => (
          <li key={contact.label}>
            <a href={contact.link} target="_blank">
              <FontAwesomeIcon icon={contact.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        &copy; Services Comptables LBP <Link to="/">lbpcomptable.ca</Link>.
      </p>
    </section>
  </section>
);

export default Navgator;
