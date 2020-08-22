import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    width: '340px'
  },
  text_center: {
    textAlign: 'center'
  },
  margin_span: {
    marginLeft: '5px',
  },
  image_large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  image_center: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default styles;