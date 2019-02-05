import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../App.scss';

class EditUrl extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: '',
      score: 0
    }
  }
  render() {
    return (
      <form className="forms">
        <h2>Url</h2>
        <input
          className="inputs"
          type="text"
          // onChange={()=> console.log('hola')}
          value={this.state.url}/>
        <input
          className="inputs"
          type="number"
          // onChange={()=> console.log('hola')}
          value={this.state.score}/>
        <hr/>
        <button
          className="green">Save/Edit</button>
      </form>
    );
  }
}

export default EditUrl;