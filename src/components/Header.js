import React from 'react';
import useStyles from '../styles/HeaderStyle';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Login from './Login';

const Header = () => {
  const classes = useStyles();

  return (
    <div id="header" className={classes.header}>
      <div id="header-shop" className={classes.header_shop}>
        <span className={classes.header_span}>
          <Link to="/" className={classes.header_a}>Shop Acc MinMin</Link>
        </span>
        <Button >
          <Login />
        </Button>
      </div>
    </div>
  )
};

export default Header;