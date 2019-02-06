import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from './containers/login';
import UserUrl from './containers/user-urls';
import EditUrl from './containers/edit-urls';
import { setToken } from './actions';
import './App.scss';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="login">
          <div className="header"></div>
          <div className="box">
            <div className="row">
              <div className="aside"></div>
              <div className="content"></div>
              <div className="aside"></div>
            </div>
          </div>
          <Route exact path="/" component={Login} />
          <Route path="/user-urls" component={UserUrl} />
          <Route path="/edit-urls/:urlId" component={EditUrl} />
          <Route path="/create-url" component={EditUrl} />
        </div>


      </Router>
    );
  }
}
function mapStateToProps({ loginReducer }) {
  return {
    loginReducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setToken
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
