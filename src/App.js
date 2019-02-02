import React, { Component } from 'react';
import Login from './containers/login';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header"></div>
        <div>
          <Login />
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
