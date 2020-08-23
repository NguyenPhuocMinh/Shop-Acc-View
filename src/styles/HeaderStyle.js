import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
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
    paddingLeft: '22px'
  },
  header_a: {
    textDecoration: 'none',
    color: '#e53935'
  },
}));

export default styles;