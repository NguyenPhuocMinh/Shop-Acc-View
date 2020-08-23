import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// component
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  )
};

export default Routes;