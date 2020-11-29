import React, { useState } from 'react';
import {
  Container,
  makeStyles,
  Button,
  Menu,
  MenuItem
} from '@material-ui/core';

const styles = makeStyles(theme => ({
  root_menu: {
    width: '100%',
    display: 'flex',
  },
  root_menu_1: {
    width: '10%',
    display: 'flex'
  },
  root_menu_width_13: {
    width: '13%',
    display: 'flex',
    position: 'relative'
  },
  root_menu_padding: {
    padding: '0 15px',
    width: '100%'
  },
  hover_button: {
    '&:hover': {
      background: 'black'
    },
    color: '#ffffff'
  },
}));

const MenuList = () => {
  const classes = styles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOnMouse = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ width: '100%', backgroundColor: 'green' }}>
      <Container maxWidth="lg">
        <div style={{ padding: '10px 15px', width: '100%', display: 'flex' }}>
          <div id='root-menu-1' style={{ width: '77%', display: 'flex' }}>
            <div>
              <Button
                className={classes.hover_button}
              >
                Trang chủ
              </Button>
            </div>
            <div>
              <Button
                onMouseOver={handleOnMouse}
                className={classes.hover_button}
              >
                Sản phẩm
            </Button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                MenuListProps={{ onMouseLeave: handleClose }}
                getContentAnchorEl={null}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
            <div>
              <Button
                className={classes.hover_button}
              >
                Thương hiệu
            </Button>
            </div>
            <div>
              <Button
                onMouseOver={handleOnMouse}
                className={classes.hover_button}
              >
                Kiến thức
            </Button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                MenuListProps={{ onMouseLeave: handleClose }}
                getContentAnchorEl={null}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
            <div>
              <Button
                className={classes.hover_button}
              >
                Flash deals
            </Button>
            </div>
            <div>
              <Button
                className={classes.hover_button}
              >
                Hệ thống cửa hàng
            </Button>
            </div>
          </div>
          <div id='root-menu-2' style={{ width: '20%' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                className={classes.hover_button}
              >
                Đã xem
            </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>

  )
};

export default MenuList;