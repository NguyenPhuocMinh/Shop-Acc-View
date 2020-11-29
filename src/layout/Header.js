import React, { Fragment } from 'react';
import {
  Divider,
  makeStyles,
  Button,
  useMediaQuery,
  Container
} from '@material-ui/core';
import DrawerList from '../components/DrawerList';
import FormSearch from '../components/FormSearch';
import ShoppingCard from '../components/ShoppingCard';

const headerStyles = makeStyles(theme => ({
  header: {
    [theme.breakpoints.down('xs')]: {
      height: '2vh'
    },
    width: '100%',
    display: 'flex'
  },
  header_element_1: {
    position: 'relative',
    display: 'flex',
    width: '33.333%'
  },
  header_element_2: {
    position: 'relative',
    display: 'flex',
    width: '66.666%',
    justifyContent: 'flex-end'
  },
  header_element_padding_1: {
    [theme.breakpoints.down('xs')]: {
      padding: '5px'
    },
    padding: '0 15px',
    width: '100%'
  },
  header_element_padding_2: {
    [theme.breakpoints.down('xs')]: {
      padding: '5px'
    },
    padding: '8px 15px 0 15px',
    width: '100%'
  },
  header_element_wrap: {
    alignContent: 'center',
    alignItems: 'center'
  },
  header_element_color: {
    width: 'auto',
    marginBottom: 0,
    color: '#666666'
  },
  header_element_a: {
    boxShadow: 'none',
    textDecoration: 'none'
  },
  header_element_str: {
    fontWeight: 'bolder',
    fontSize: '15px'
  },
  header_element_fontSize: {
    fontSize: '13px'
  },
  text_transform: {
    textTransform: 'capitalize',
    color: '#666666'
  },
  hover_button: {
    '&:hover': {
      background: 'none'
    }
  },
  divider_cross: {
    margin: '10px'
  },
  flex_item: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  sub_header: {
    width: '100%',
    display: 'flex'
  },
  img: {
    width: '13%',
    display: 'flex',
    position: 'relative'
  },
  img_padding: {
    padding: '15px 30px',
    width: '100%'
  },
  img_width: {
    borderRadius: '50%',
    width: '110px',
    height: '110px'
  },
  draw: {
    width: '9%',
    display: 'flex',
    position: 'relative'
  },
  draw_padding: {
    padding: '50px 15px',
    width: '100%'
  },
  search: {
    width: '55%',
    display: 'flex',
    position: 'relative'
  },
  search_padding: {
    padding: '30px 15px',
    width: '100%'
  },
  shop_card: {
    width: '23%',
    display: 'flex',
    position: 'relative'
  },
  shop_card_padding: {
    padding: '20px 15px',
    width: '100%'
  }
}));

const Header = () => {
  const isWidth = useMediaQuery(theme => theme.breakpoints.down('xs'));
  console.log("Header -> isWidth", isWidth)
  const classes = headerStyles();
  return (
    <Fragment>
      <Container maxWidth='lg'>
        <div id='header' className={classes.header}>
          <div id='header-element-1' className={classes.header_element_1}>
            <div id='header-element-padding-1' className={classes.header_element_padding_1}>
              <div id='header-element-wrap' className={classes.header_element_wrap}>
                <div id='header-element-color' className={classes.header_element_color}>
                  <p>
                    <span id='header-element-fontSize' className={classes.header_element_fontSize} >Hotline: </span>
                    <a href="tel:0935.348.581" id='header-element-a' className={classes.header_element_a}>
                      <span style={{ color: 'green' }}>
                        <strong id='header-element-strong' className={classes.header_element_str} >0935.348.581</strong>
                      </span>
                    </a> - <a href="tel:0935.348.581" id='header-element-a' className={classes.header_element_a}>
                      <span style={{ color: 'green' }}>
                        <strong id='header-element-strong' className={classes.header_element_str}>0935.348.581</strong>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id='header-element-2' className={classes.header_element_2}>
            <div id='header-element-padding-2' className={classes.header_element_padding_2}>
              <div id='header-element-wrap' className={classes.header_element_wrap}>
                <div id='flex-item' className={classes.flex_item}>
                  <Button id='hover-button' className={classes.hover_button}>
                    <span id='text-transform' className={classes.text_transform} >Theo dõi đơn hàng</span>
                  </Button>
                  <Divider className={classes.divider_cross} orientation="vertical" flexItem />
                  <Button id='hover-button' className={classes.hover_button}>
                    <span id='text-transform' className={classes.text_transform} >Đăng nhập</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Divider />
      <Container maxWidth='lg'>
        <div id='sub-header' className={classes.sub_header}>
          <div id='img' className={classes.img}>
            <div id='img-padding' className={classes.img_padding}>
              <img
                className={classes.img_width}
                alt=""
                src="https://cdn.wheyshop.vn/wp-content/uploads/2019/05/logo-wheyshop.vn_.png"
              />
            </div>
          </div>
          <div id='draw' className={classes.draw}>
            <div id='draw-padding' className={classes.draw_padding}>
              <DrawerList />
            </div>
          </div>
          <div id='search' className={classes.search}>
            <div id='search-padding' className={classes.search_padding}>
              <FormSearch />
            </div>
          </div>
          <div id='shop-card' className={classes.shop_card}>
            <div id='shop-card-padding' className={classes.shop_card_padding}>
              <div id='flex-item' className={classes.flex_item}>
                <ShoppingCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  )
};

export default Header;