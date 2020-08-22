import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return ({
    main: {
      backgroundColor: '#000',
      border: '1px ridge #212121',
      height: 'auto'
    },
    main_head: {
      display: 'flex',
      justifyContent: 'center',
      height: '5vh',
    },
    root: {
      background: '#000',
      maxWidth: '270px',
      border: '2px ridge #757575'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: '#8bc34a',
    },
    color_avatar : {
      color : '#8bc34a'
    },
    paper: {
      height: '380px',
      width: '280px',
      border: '1px solid white'
    },
    typography: {
      display: 'flex',
      justifyContent: 'space-around',
      color: '#9e9e9e'
    }
  })
});

export default useStyles;