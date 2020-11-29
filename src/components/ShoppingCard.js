import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const styles = makeStyles(theme => ({
  hover_button: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '12px',
      color: 'grey',
      fontSize: '0.5rem',
      '&:hover': {
        background: 'none'
      }
    },
    color: 'grey',
    fontSize: '0.85rem',
    textTransform: 'capitalize',
    '&:hover': {
      background: 'none'
    },
    marginTop: '27px',
    marginLeft: '30px'
  },
  icon_button: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.65rem'
    }
  }
}))

const ShoppingCart = () => {
  const classes = styles();
  return (
    <Button className={classes.hover_button}>
      <AddShoppingCartIcon className={classes.icon_button} />
      <span>Thêm vào giỏ hàng</span>
    </Button>
  )
};

export default ShoppingCart;