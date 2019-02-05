import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Rate } from 'antd';
import { withRouter } from 'react-router';

import { getUrls, updateScore, deleteUrl } from '../actions';

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

  }

  //function to call the action and load all the user urls
  componentDidMount() {
    console.log(this.props)
    this.props.getUrls(this.props.loginReducer.token);
  }
  //to prevent de button default
  buttonPrevent(e) {
    e.preventDefault();
    this.props.deleteUrl(
      this.props.loginReducer.userUrls[0].id,
      this.props.loginReducer.user.id)

  }
  handleChange(value, urlId, userId) {
    this.setState({ value });
    this.props.updateScore(urlId, value, userId)
  }
  //to create the buttons
  createButtons() {
    return (
      <div>
        <button
          className=""
          onClick={() => this.props.history.push('/edit-urls')}>
          Edit
          </button>

        <button
          className=""
          onClick={e => this.buttonPrevent(e)}>
          Delete
          </button>

      </div>
    )
  }
  //function to create the list of urls 
  createUrlList(user, i) {
    console.log('USUARIO: ', user)
    return (
      <li key={i}>
        {this.createButtons()}{user.url}
        <Rate count={5} onChange={e => this.handleChange(e, user.id, user.UserId)} value={user.score} />
      </li>
    )
  }
  render() {
    return (
      <form className="forms">
        <h1>Welcome</h1>
        <button
          className="green"
          onClick={this.buttonPrevent}>
          Create
        </button>
        <ul>
          {this.props.loginReducer.userUrls.map((e, i) => this.createUrlList(e, i))}
        </ul>

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
    deleteUrl
  }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserUrl));