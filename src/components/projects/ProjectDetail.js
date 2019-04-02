import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import {Redirect} from  "react-router-dom";

function ProjectDetail(props) {
  const { project, auth } = props;

    if(!auth.uid){
      return <Redirect to='/signin'/>
    }
  
  if ( project ) {
    return (
      <div className="container section oroject-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">
              <h5>{project.title}</h5>
              <p>{project.content}</p>
            </span>
          </div>
          <div className="card-action gret grey-text lighten-4">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>{/*project.createAt.toString()*/}</div>
          </div>
        </div>
      </div>
    );
  }
  return <div>Loading...</div>;
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth:state.firebase.auth
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetail);
