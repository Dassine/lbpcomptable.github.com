import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Service1 from '../components/MyServices/Service1';
import Service2 from '../components/MyServices/Service2';
import Service3 from '../components/MyServices/Service3';
import Service4 from '../components/MyServices/Service4';

import service1 from '../data/myservices/service1';
import service2 from '../data/myservices/service2';
import service3 from '../data/myservices/service3';
import service4 from '../data/myservices/service4';

const sections = ['Service1', 'Service2', 'Service3', 'Service4'];

const MyServices = (route) => {
  useEffect(() => {
    window.location.replace(`#${window.location.pathname.split('/').pop()}`);
  }, []);

  return (
    <Main>
      <Helmet title="Resume" />
      <article className="post" id="resume">
        <header>
          <div className="title">
            <h2>
              <Link to="myservices">Mes Services</Link>
            </h2>
            {/* <div className="link-container">
              {sections.map((sec, index) => (
                <h4 key={sec}>
                  <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                </h4>
              ))}
            </div> */}
          </div>
        </header>
        <Service1 data={service1} />
        <Service2 data={service2} />
        <Service3 data={service3} />
        <Service4 data={service4} />
      </article>
    </Main>
  );
};
export default MyServices;
