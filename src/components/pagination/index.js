import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';

const useStyles = makeStyles((theme) => ({
  root: {
    // '& > *': {
    //   marginTop: theme.spacing(2),
    // },
    background: '#9e9e9e',
    display: 'flex',
    justifyContent: 'center'
  },
}));

const PaginationRounded = props => {
  const {
    count,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TablePagination
        rowsPerPageOptions={[16, 32, 64, 100]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelRowsPerPage="Số hàng"
      />
    </div>
  );
};

export default PaginationRounded;