import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import useStyles from '../styles/PaginationStyle';

const PaginationCustom = props => {
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

export default PaginationCustom;