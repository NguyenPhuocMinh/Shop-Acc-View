import React from 'react';
import useStyles from '../styles/FooterStyle';

const Footer = () => {
  const classes = useStyles();
  return (
    <div id="footer" className={classes.footer}>
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
      <div style={{ textAlign: 'center', color: '#8bc34a', fontWeight: 'bold' }}>
        © 2020 ShopMinMin, Shop acc uy tín chất lượng.Cảm ơn quý khách đã ghé shop! .
      </div>
    </div >
  )
};

export default Footer;