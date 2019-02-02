import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.scss';

class UserUrl extends Component {
  render() {
    return (
      <div className="column">
        <div className="row">
          <div className="aside"></div>
          <div className="userUrl">
            
          </div>
          <div className="aside"></div>
        </div>
      </div>
    );
  }
}

export default UserUrl;