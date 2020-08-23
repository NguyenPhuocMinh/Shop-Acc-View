import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return ({
    main: {
      backgroundColor: '#000',
      border: '1px ridge #212121',
      height: 'auto'
    },
    root: {
      maxWidth: '270px',
      border: '2px ridge #757575'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    typography: {
      display: 'flex',
      justifyContent: 'space-around',
      color: '#9e9e9e'
    }
  })
});

export default useStyles;