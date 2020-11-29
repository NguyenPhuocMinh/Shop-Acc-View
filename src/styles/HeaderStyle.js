import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  header: {
    padding: '30px',
    display: 'flex',
    justifyContent: 'space-around'
  },
  header_span: {
    fontSize: '1.875em',
    fontWeight: 'bold',
    fontFamily: 'Sofia',
  },
  header_a: {
    textDecoration: 'none',
    color: '#e53935',
  },
}));

export default styles;