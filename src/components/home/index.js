import React, { useState, useEffect, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TablePagination from '@material-ui/core/TablePagination';
import useStyles from './styles';
import LinearProgress from '../loading/LinearProgress';
import TablePaginationActions from '../pagination';
import MenuWithRank from './openMenu/withRank';
import MenuWithPrice from './openMenu/withPrice';
import MenuWithHero from './openMenu/withHero';
import GridCard from './gridCard';

const Home = () => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const requestURL = `${process.env.REACT_APP_REST_API_URL}/accounts`;

  useEffect(() => {
    const fetchDataAccount = () => {
      const request = new Request(requestURL, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
      })
      fetch(request)
        .then(response => {
          return response.json()
            .then(result => {
              setRows(result);
              setIsLoading(false);
            })
        })
        .catch(err => {
          return Promise.reject(err);
        })
    }
    fetchDataAccount();
  }, [requestURL]);

  return (
    <Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" className={classes.main} >
          <div className={classes.main_head}>
            <MenuWithRank />
            <MenuWithPrice />
            <MenuWithHero />
            <Button variant="outlined" color="secondary"
              style={{ color: '#e53935', width: '100px', height: '30px', marginTop: '13px' }}>Xóa</Button>
          </div>
          {isLoading && <LinearProgress />}
          <div>
            <Grid container style={{ display: 'inline' }} spacing={2}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                  {(rowsPerPage > 0
                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : rows
                  ).map((value) => {
                    return (
                      <GridCard value={value} classes={classes} />
                    )
                  })}
                  {emptyRows > 0 && (
                    <Grid container spacing={2} style={{ height: 53 * emptyRows }}>
                      <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>
                          <Paper />
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div style={{ background: '#9e9e9e', marginTop: '15px', display: 'flex', justifyContent: 'center' }}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'Tất cả', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </div>
        </Typography>
      </Container>
    </Fragment>
  )
};

export default Home;