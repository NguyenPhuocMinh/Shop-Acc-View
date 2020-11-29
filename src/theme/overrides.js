export default {
  overrides: {
    MuiButton: {
      root: {
        color: '#555555',
        '& :hover': {
          color: 'green',
        }
      }
    },
    MuiIconButton: {
      root: {
        color: '#555555',
        '& :hover': {
          color: 'green',
          backgroundColor: '0'
        }
      }
    }
  }
}