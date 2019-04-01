import React from "react";

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content  blue-grey-text darken-4">
        <span className="card-title">{project.title}</span>
        <p>Post by Somebody </p>
        <p className="grey-text">3rd,September,2pm </p>
      </div>
    </div>
  );
};

export default ProjectSummary;