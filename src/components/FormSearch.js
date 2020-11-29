import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  text_field: {
    [theme.breakpoints.down('xs')]: {
      width: '18ch',
      marginTop: '-10px',
    },
    width: '100%',
    // minWidth: '80ch'
  }
}));

const FormSearch = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        className={classes.text_field}
        label="Tìm kiếm"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default FormSearch;