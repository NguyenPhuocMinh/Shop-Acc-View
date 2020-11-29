import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// component
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import ViewAcc from './components/ViewAcc';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/accounts/:id" exact component={ViewAcc} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  )
};

export default Routes;