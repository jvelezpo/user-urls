import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.scss';

class Login extends Component {
  
  render() {
    return (
      <div className="column">
        <div className="row">
          <div className="aside"></div>
          <div className="content">
            <h3>E-mail</h3>
            <input
              className=""
              type="email"
              placeholder="email"
              onChange={e => console.log()} />
            <h3>Password</h3>
            <input
              className=""
              type="password"
              placeholder="password"
              onChange={e => console.log()} />
              <br></br>
              <button
                className="green"
              >Sign In</button>
          </div>
          <div className="aside"></div>
        </div>
      </div>
    );
  }
}

export default Login;