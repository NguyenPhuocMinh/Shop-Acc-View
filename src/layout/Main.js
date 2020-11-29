import React, { Fragment } from 'react';
import Header from './Header';
import Menu from './Menu';
import Content from './Content';
import Footer from './Footer';

const Main = () => {
  return (
    <Fragment>
      <Header />
      <Menu />
      <Content />
      <Footer />
    </Fragment>
  )
};

export default Main;