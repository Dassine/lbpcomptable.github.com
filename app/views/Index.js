import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import ReactMarkdown from 'react-markdown';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

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

  // const card = (title, sections) => (
  //   <Card sx={{ height: 250 }}>
  //     <CardActionArea sx={{ height: 250 }}>
  //       <CardContent sx={{ height: 250 }}>
  //         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
  //           {title}
  //         </Typography>

  //         {sections.map((section) => (
  //           <Typography
  //             variant="body2"
  //             color="text.secondary"
  //             textTransform="none"
  //             wordWrap
  //             sx={{ wordWrap: 'break-word' }}
  //           >
  //             {bull} {section} <br />
  //           </Typography>
  //         ))}
  //       </CardContent>
  //     </CardActionArea>
  //   </Card>
  // );

  const card = (title, sections) => (
    <Card style={{ height: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {sections.map((section) => (
          <footer className="blockquote-footer">{section}</footer>
        ))}
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
            {/* <p>
              A beautiful, responsive, react app written with modern Javascript.
            </p> */}
          </div>
        </header>
        {/* <Row>
          {data.map((service) => card(service.label, service.sections))}
        </Row> */}

        <Grid
          container
          columns={{ xs: 4, md: 12 }}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {data.map((service) => (
            <Grid item xs={6}>
              {card(service.label, service.sections)}
            </Grid>
          ))}
        </Grid>

        {/* <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to='/about'>about me</Link>, or you can check out my{' '}
        <Link to='/resume'>resume</Link>, <Link to='/projects'>projects</Link>,{' '}
        or <Link to='/contact'>contact</Link> me.
      </p> */}
        {/* <p>
          {' '}
          Welcome to my website. Please feel free to read more{' '}
          <Link to="/about">about me</Link>, or you can check out my{' '}
          <Link to="/resume">resume</Link>, or{' '}
          <Link to="/contact">contact</Link> me.
        </p>
        <p>
          {' '}
          Source available{' '}
          <a
            href="https://github.com/Dassine/dassine.github.com"
            target="_blank"
          >
            here
          </a>
          .
        </p> */}
      </article>
    </Main>
  );
};

export default Index;
