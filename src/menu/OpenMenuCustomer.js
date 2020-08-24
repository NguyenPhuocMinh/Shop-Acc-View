import React, { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Avatar from '@material-ui/core/Avatar';
import useStyles from '../styles/CustomerStyle';
import { get } from 'lodash';

const OpenMenuCustomer = props => {
  const { customer } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const name = get(customer, 'name');
  const firstLetterName = name.split('')[0];

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleLogout = e => {
    localStorage.clear();
    window.location.href = '/'
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <Button
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        startIcon={<Avatar alt={firstLetterName} src="/" className={classes.image_background} />}
      >
        {/* <span className={classes.span} >{customer.name}</span> */}
      </Button>
      <Popper
        style={{ zIndex: 1 }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined} transition disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" style={{ padding: '10px' }} onKeyDown={handleListKeyDown}>
                  <div className={classes.image_center}>
                    <Avatar alt={firstLetterName} src="/" className={classes.image_large} />
                  </div>
                  <div style={{ padding: '10px' }}>
                    <div className={classes.text_center}>{customer.name}</div>
                    <div className={classes.text_center}>{customer.email}</div>
                  </div>
                  <div className={classes.image_center}>
                    <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
                  </div>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default OpenMenuCustomer;