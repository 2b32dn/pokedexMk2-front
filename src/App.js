import React, { Component } from 'react';

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Routes from '../src/components/routes/Routes'

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <main>
            <Routes/>
          </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
