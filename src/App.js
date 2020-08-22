import React from 'react';
import './App.css';

import Home from './components/home';
import Header from './components/layout/header';
import Footer from './components/layout/footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
