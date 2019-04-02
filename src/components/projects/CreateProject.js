import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  state = { title: "", content: "" };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createProject(this.state);
  };
  render() {
    const {auth}=this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />; // 保護未登入時重新導向登入頁
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              cols="30"
              rows="10"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToprops=(state)=>{
  return{
    auth:state.firebase.auth
  }
}
const mapDispatchToprops = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project)) // 13行呼叫，名稱要吻合
  };
};
export default connect(
  mapStateToprops,
  mapDispatchToprops
)(CreateProject);
