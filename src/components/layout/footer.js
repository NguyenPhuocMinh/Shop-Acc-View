import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Divider } from '@material-ui/core';

import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" >
          <div className={classes.footer_space_around}>
            <Button className={classes.footer_grid_color}>
              <FacebookIcon />
              <span className={classes.footer_margin_left}>Facebook</span>
            </Button>
            <Button className={classes.footer_grid_color}>
              <TwitterIcon />
              <span className={classes.footer_margin_left}>Twitter</span>
            </Button>
            <Button className={classes.footer_grid_color}>
              <YouTubeIcon />
              <span className={classes.footer_margin_left}>Youtube</span>
            </Button>
          </div>
          <div className={classes.footer_space_around}>
            <div className={classes.footer_grid_center}>
              <p className={classes.footer_p}>Công ty sản xuất</p>
              <a className={classes.footer_a} href="/">Về chúng tôi</a>
              <a className={classes.footer_a} href="/">Tiền thưởng</a>
              <a className={classes.footer_a} href="/">Cao cấp</a>
              <a className={classes.footer_a} href="/">Blog</a>
              <a className={classes.footer_a} href="/">Nhận phiếu giảm giá</a>
            </div>
            <div className={classes.footer_grid_center}>
              <p className={classes.footer_p}>Giúp đỡ và hỗ trợ</p>
              <a className={classes.footer_a} href="/">Trung tâm kiến thức</a>
              <a className={classes.footer_a} href="/">Liên hệ chúng tôi</a>
              <a className={classes.footer_a} href="/">Hỗ trợ cao cấp</a>
              <a className={classes.footer_a} href="/">Tài trợ</a>
              <a className={classes.footer_a} href="/">Phát triển phong tục</a>
            </div>
          </div>
          <br />
          <Divider />
          <div style={{ textAlign: 'center', paddingBottom: '20px', color: '#8bc34a', fontWeight: 'bold' }}>
            © 2020 ShopMinMin, Shop acc uy tín chất lượng.Cảm ơn quý khách đã ghé shop! .
          </div>
        </Typography>
      </Container>
    </Fragment>
  )
};

export default Footer;