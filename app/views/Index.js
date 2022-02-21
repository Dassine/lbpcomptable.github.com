import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import Main from '../layouts/Main';
import data from '../data/services';

const Index = () => {
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  const history = useHistory();

  const card = (title, index, sections) => (
    <Card
      onClick={() => window.location.replace(`/myservices/service${index}`)}
      style={{
        cursor: 'position',
        height: '18rem',
        backgroundColor: index % 2 == 0 ? 'black' : 'white',
      }}
    >
      <Card.Body>
        <Card.Title>
          <h4
            style={{
              color: index % 2 == 0 ? 'white' : 'black',
            }}
          >
            {title}
          </h4>
        </Card.Title>
        {/* {sections.map((section) => (
          <footer className="blockquote-footer">{section}</footer>
        ))} */}
      </Card.Body>
    </Card>
  );

  return (
    <Main>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link to="/">Mes Services</Link>
            </h2>
          </div>
        </header>

        <Grid
          container
          columns={{ xs: 2, md: 12 }}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {data.map((service, index) => (
            <Grid item xs={isMobile ? 2 : 3}>
              {card(service.label, index, service.sections)}
            </Grid>
          ))}
        </Grid>
      </article>
    </Main>
  );
};

export default Index;
