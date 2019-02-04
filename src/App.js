import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from './containers/login';
import UserUrl from './containers/user-urls';

import './App.scss';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/user-urls" component={UserUrl} />
        </div>
      </Router>
    );
  }
}
export default App;
