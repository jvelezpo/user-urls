import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { newUrl } from '../actions';
import '../App.scss';

class EditUrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      score: 0
    }
  }
  saveButton(e) {
    e.preventDefault();
    this.props.newUrl(
      this.state.url,
      this.props.loginReducer.user.id,
      this.state.score
    );
    this.props.history.push('/user-urls');
  }
  render() {
    return (
      <form className="forms">
        <h2>Url</h2>
        <input
          className="inputs"
          type="text"
          onChange={e => this.setState({ url: e.target.value })}
        />
        <input
          className="inputs"
          type="number"
          onChange={e => this.setState({ score: e.target.value })}
        />
        <br />
        <button
          className="green"
          onClick={e => this.saveButton(e)}>Save/Edit
        </button>
        <button
          className="red"
          onClick={() => this.props.history.push('/user-urls')}>
          Cancel
        </button>
      </form>
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
function mapDispatchToProps(dipsatch) {
  return bindActionCreators({
    newUrl
  }, dipsatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditUrl));