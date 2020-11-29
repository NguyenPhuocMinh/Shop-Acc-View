import React from 'react';
import {
  Container,
  Typography,
  makeStyles,
} from '@material-ui/core';

const headerStyles = makeStyles(theme => ({

}));

const Footer = () => {
  const classes = headerStyles();
  return (
    <div id="footer" style={{ backgroundColor: 'hotpink', height: '60px', width: '100%', clear: 'both', bottom: 0 }}>
      <Container maxWidth="lg">
        <Typography component="div">
          Footer
        </Typography>
      </Container>
    </div>
  )
};

export default Footer;