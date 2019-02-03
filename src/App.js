import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: ''
    }
  }
  render() {
    return (
      <div>
        <div className="header"></div>
        <div className="box">
          <div className="row">
            <div className="aside"></div>
            <div className="content">
              <form className="forms">
                <h3>E-mail</h3>
                <input
                  className="inputs"
                  type="email"
                  placeholder="email"
                  onChange={e => this.setState({ email: e.target.value })} />
                <h3>Password</h3>
                <input
                  className="inputs"
                  type="password"
                  placeholder="password"
                  onChange={e => this.setState({ pass: e.target.value })} />
                <br></br>
                <button
                  className="green"
                  disabled={this.state.email.length ===0 || this.state.pass.length ===0}
                >Sign In</button>
              </form>
            </div>
            <div className="aside"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
