import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  span: {
    color: '#9e9e9e',
    textTransform: 'capitalize'
  },
  paper: {
    width: 'auto',
    height: 'auto'
  },
  text_center: {
    textAlign: 'center',
    color: '#9e9e9e'
  },
  image_background: {
    background: '#8bc34a'
  },
  image_center: {
    display: 'flex',
    justifyContent: 'center'
  },
  image_large: {
    background: '#8bc34a',
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default styles;