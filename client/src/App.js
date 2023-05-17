import React, { Fragment } from 'react';

import './App.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import MainBody from './components/Layout/MainBody';

function App() {
  return (
    <Fragment>
      <Header />
      <MainBody />
      <Footer />
    </Fragment>
  );
}

export default App;
