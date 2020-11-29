import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, Container } from '@material-ui/core';
import theme from './theme';
import Main from './layout/Main';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </Router>
    </React.StrictMode>
  );
}

export default App;
