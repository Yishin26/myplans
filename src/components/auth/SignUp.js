import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";


class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {

    const {  auth } = this.props;
    if (auth.uid) {
      // 如果已經登入，就不需要再進入註冊頁，重新導向首頁
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">first Name</label>
            <input
              type="text"
              id="firstName"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn pink lighten z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
   
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(SignUp);
