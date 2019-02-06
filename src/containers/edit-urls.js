import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { newUrl,getUrl } from '../actions';
import '../App.scss';

class EditUrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      score: 0
    }
  }
  componentDidMount(){
    console.log('que trae????::::',this.props.match.params.urlId)
    this.props.getUrl(this.props.match.params.urlId)
    this.setState({
      url:this.props.loginReducer.urlData.url,
      score: this.props.loginReducer.urlData.score
    })
  }
  componentWillUnmount(){
    this.setState({
      url:'',
      score: 0
    })
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
          value={this.state.url}/>
        <input
          className="inputs"
          type="number"
          onChange={e => this.setState({ score: e.target.value })}
          value={this.state.score}/>
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
    newUrl,
    getUrl
  }, dipsatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditUrl));