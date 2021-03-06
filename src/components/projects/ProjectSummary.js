import React from "react";
import moment from 'moment';

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content  blue-grey-text darken-4">
        <span className="card-title">{project.title}</span>
        <p>
          Post by {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text">
          {" "}
          {moment(project.createAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;