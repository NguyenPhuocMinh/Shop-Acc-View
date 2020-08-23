import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  margin_span: {
    marginLeft: '5px',
  },
  paper: {
    width: '340px'
  },
  image_center: {
    display: 'flex',
    justifyContent: 'center'
  },
  image_large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default styles;