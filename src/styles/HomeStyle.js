import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return ({
    home: {
      backgroundColor: '#000',
      border: '1px ridge #212121',
      height: '180vh',
    },
    home_gird: {
      padding: '20px',
    },
    card: {
      maxWidth: '270px',
      width: '300px',
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