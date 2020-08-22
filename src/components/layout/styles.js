import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  header: {
    height: '15vh',
  },
  header_shop: {
    paddingTop: '10px',
    display: 'flex',
    justifyContent: 'space-around'
  },
  header_span: {
    fontSize: '1.875em',
    fontWeight: 'bold',
    paddingTop: '10px',
    fontFamily: 'Sofia',
    paddingLeft : '22px'
  },
  header_a: {
    textDecoration: 'none',
    color: '#e53935'
  },
  footer: {
    height: '50vh',
  },
  footer_space_around: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  footer_grid_color: {
    display: 'grid',
    color: '#aaaaaa'
  },
  footer_margin_left: {
    marginLeft: '-24px'
  },
  footer_grid_center: {
    display: 'grid',
    textAlign: 'center'
  },
  footer_p: {
    color: '#8bc34a',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  footer_a: {
    textDecoration: 'none',
    color: '#9e9e9e'
  }
});

export default styles;