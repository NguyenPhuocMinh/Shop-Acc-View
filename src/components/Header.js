import React from 'react';
import useStyles from '../styles/HeaderStyle';
import { Link } from 'react-router-dom';
import Login from './Login';

const Header = () => {
  const classes = useStyles();

  return (
    <div id="header" className={classes.header}>
      <span className={classes.header_span}>
        <Link to="/" className={classes.header_a}>Shop Acc MinMin</Link>
      </span>
      <Login />
    </div>
  )
};

export default Header;