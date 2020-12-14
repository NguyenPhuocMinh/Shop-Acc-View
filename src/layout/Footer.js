import React from 'react';
import {
  Container,
  Typography,
  makeStyles,
  Divider,
} from '@material-ui/core';
import { Fragment } from 'react';

const headerStyles = makeStyles(theme => ({

}));

const Footer = () => {
  const classes = headerStyles();
  return (
    <Fragment>
      <div style={{ width: '100%' }}>
        <Divider />
      </div>
      <Container maxWidth="lg">
        <div id="footer"
          style={{
            backgroundColor: 'hotpink',
            height: '60px',
            width: '100%',
            clear: 'both',
            bottom: 0,
            display: 'flex'
          }}>
          <div style={{ width: '30%' }}>
            <div style={{ width: '100%' }}>
              <h3 style={{
                lineHeight: 1,
                paddingBottom: '20px',
                fontSize: '22px',
                textAlign: 'left',
                fontWeight: 700,
                position: 'relative',
                color: '#000',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <span style={{ fontSize: '17px' }}>HỆ THỐNG CỬA HÀNG</span>
              </h3>
            </div>
          </div>
          <div style={{ width: '20%' }}>

          </div>
          <div style={{ width: '25%' }}>

          </div>
          <div style={{ width: '25%' }}>

          </div>
        </div>
      </Container>
    </Fragment>

  )
};

export default Footer;