import React, { Component } from 'react';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
