import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  footer_space_around: {
    display: 'flex',
    justifyContent: 'space-around'
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
  },
}));

export default styles;