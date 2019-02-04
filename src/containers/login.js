import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { loginApi } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserUrls from './user-urls';

import '../App.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: ''
    }
    this.login = this.login.bind(this);
  }
  componentDidMount() {
    console.log(this.props.history);
  }
  login(e) {
    e.preventDefault();
    this.props.loginApi(this.state.email, this.state.pass);
  }
  render() {
    return (
      <div className="login">
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
                <Router>
                  <div>
                    <ul>
                      <li>

                        <button
                          className="green"
                          disabled={this.state.email.length === 0 || this.state.pass.length === 0}
                          onClick={this.login}>Sign In</button>

                      </li>
                    </ul>

                    <Route path={`/user-urls/`} component={UserUrls} />
                  </div>
                </Router>
              </form>
              <h2>{this.props.loginReducer.email}</h2>
            </div>
            <div className="aside"></div>
          </div>
        </div>
      </div>
    );
  }
}
//reducers
function mapStateToProps({ loginReducer }) {
  return {
    loginReducer
  }
}
//actions
function mapDispatchToState(dipsatch) {
  return bindActionCreators({
    loginApi
  }, dipsatch)
}
export default connect(mapStateToProps, mapDispatchToState)(Login);
