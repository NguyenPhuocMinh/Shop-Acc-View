import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const MenuWithRank = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{ color: '#9e9e9e', paddingTop: '15px' }}
        >
          Tìm theo giá
          <ArrowDropDownIcon />
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
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom', zIndex: 1 }}
            >
              <Paper >
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Giá 50k</MenuItem>
                    <MenuItem onClick={handleClose}>Từ 50k - 100k</MenuItem>
                    <MenuItem onClick={handleClose}>Từ 100k - 200k</MenuItem>
                    <MenuItem onClick={handleClose}>Từ 200k - 300k</MenuItem>
                    <MenuItem onClick={handleClose}>Từ 300k - 400k</MenuItem>
                    <MenuItem onClick={handleClose}>Từ 400k - 500k</MenuItem>
                    <MenuItem onClick={handleClose}>Từ 500k - 999k</MenuItem>
                    <MenuItem onClick={handleClose}>Acc Vip</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};

export default MenuWithRank;