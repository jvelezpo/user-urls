import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Rate } from 'antd';
import { withRouter } from 'react-router';

import { getUrls, updateScore, deleteUrl, logOut } from '../actions';

import '../App.scss';

class UserUrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3
    }

    this.createUrlList = this.createUrlList.bind(this);
    this.createButtons = this.createButtons.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.prevent = this.prevent.bind(this);
    this.logOutButton = this.logOutButton.bind(this);
  }

  //function to call the action and load all the user urls
  componentDidMount() {
    this.props.getUrls(this.props.loginReducer.token);
  }
  //PREVENT
  prevent(e) {
    e.preventDefault();
  }
  //DELETE BUTTON!
  buttonDelete(e, i) {
    this.prevent(e);
    this.props.deleteUrl(
      this.props.loginReducer.userUrls[i].id,
      this.props.loginReducer.user.id
    )
  }
  //UPDATE FORM BUTTON
  buttonUpdate(e, i) {
    this.prevent(e);
    console.log('que id estoy mandando?::', this.props.loginReducer.userUrls[i].id)
    this.props.history.push(`/edit-urls/${this.props.loginReducer.userUrls[i].id}`)

  }
  //LOG OUT
  logOutButton(e){
    this.prevent(e);
    this.props.logOut();
    this.props.history.push('/');
  }
  //to handle the stare score
  handleChange(value, urlId, userId) {
    this.setState({ value });
    this.props.updateScore(urlId, value, userId)
  }
  //to create the buttons
  createButtons(i) {
    return (
      <div>
        <button
          className="yellow"
          onClick={e => this.buttonUpdate(e, i)}>
          Edit
          </button>

        <button
          className="red"
          onClick={e => this.buttonDelete(e, i)}>
          Delete
          </button>

      </div>
    )
  }
  //function to create the list of urls 
  createUrlList(user, i) {
    return (
      <li 
        key={i}
        className="list">
        {this.createButtons(i)}{user.url}
        <Rate count={5} onChange={e => this.handleChange(e, user.id, user.UserId)} value={user.score} />
      </li>
    )
  }
  render() {
    return (
      <form className="forms">
        <h1>Welcome</h1>
        <button
          className="create green"
          onClick={() => this.props.history.push('/create-url')}>
          Create
        </button>
        <ul>
          {this.props.loginReducer.userUrls.map((e, i) => this.createUrlList(e, i))}
        </ul>
        <hr />
        <button
          className="red logOut"
          onClick={e => this.logOutButton(e)}>
          Log out
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
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getUrls,
    updateScore,
    deleteUrl,
    logOut
  }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserUrl));