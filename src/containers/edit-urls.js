import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.scss';

class EditUrl extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: ''
    }
  }
  render() {
    return (
      <form>
        <h2>Url</h2>
        <input
          className=""
          type="text"
          onChange={()=> console.log('hola')}
          value={this.state.url}/>
      </form>
    );
  }
}

export default EditUrl;