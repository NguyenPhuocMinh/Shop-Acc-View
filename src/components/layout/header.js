import React, { useState } from 'react';
import useStyles from './styles';
import { Button } from '@material-ui/core';

import Login from '../customers/login';

const Header = () => {
  const classes = useStyles();
  const [statusLogin, setStatusLogin] = useState(false);

  return (
    <div id="header" className={classes.header}>
      <div id="header-shop" className={classes.header_shop}>
        <span className={classes.header_span}>
          <a className={classes.header_a}>Shop Acc MinMin</a>
        </span>
        <Button >
          <Login setStatusLogin={setStatusLogin} />
        </Button>
      </div>
    </div>
  )
};

export default Header;