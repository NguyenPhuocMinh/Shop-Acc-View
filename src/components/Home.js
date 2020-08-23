import React, { useState, useEffect, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from '../styles/HomeStyle';
import LinearProgressCustom from '../custom/LinearProgressCustom';
import PaginationCustom from '../custom/PaginationCustom';
import GridCard from './GridCard';

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

  useEffect(() => {
    const requestURL = `${process.env.REACT_APP_REST_API_URL}/accounts`;
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
  }, []);

  return (
    <Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography
          id="home"
          component="div"
          className={classes.home}
        >
          {isLoading && <LinearProgressCustom />}
          <Grid container>
            <Grid item xs={12} className={classes.home_gird}>
              <Grid container justify="center" spacing={2}>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((value, index) => {
                  return (
                    <GridCard
                      key={index}
                      value={value}
                      classes={classes}
                    />
                  )
                })}
              </Grid>
            </Grid>
          </Grid>
        </Typography>
        <PaginationCustom
          count={rows.length}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Container>
    </Fragment>
  )
};

export default Home;