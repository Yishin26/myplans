import React, { Component } from "react";
import {connect} from 'react-redux';
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = { email: "", password: "" };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const{authError,auth}=this.props;
     if (auth.uid) { // 如果已經登入，就不需要再進入登入頁，重新導向首頁
       return <Redirect to="/" />;
     }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Login</h5>
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
          <div className="input-field ">
            <button className="btn pink lighten z-depth-0">Login</button>
            <div className="red-text ">
              {authError ? (
                <p >{authError}</p>
              ) : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth:state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
