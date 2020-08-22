import React, { useState, useEffect, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles';
import LinearProgress from '../loading/LinearProgress';
import PaginationRounded from '../pagination';
import MenuWithRank from './openMenu/withRank';
import MenuWithPrice from './openMenu/withPrice';
import MenuWithHero from './openMenu/withHero';
import GridCard from './gridCard';

const Home = () => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(16);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
            <Grid container style={{ display: 'inline' }}>
              <Grid item xs={12} style={{ paddingTop: '10vh' }}>
                <Grid container justify="center" spacing={2}>
                  {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((value) => {
                    return (
                      <GridCard  value={value} classes={classes} />
                    )
                  })}
                </Grid>
              </Grid>
            </Grid>
          </div>
          <PaginationRounded
            count={rows.length}
            page={page}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Typography>
      </Container>
    </Fragment>
  )
};

export default Home;