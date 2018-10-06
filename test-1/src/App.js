import React, { Component } from 'react';
import './App.scss';
import People from './components/People';

class App extends Component {
  render() {
    return (
      <div className="App"><People />
      </div>
    );
  }
}

export default App;
