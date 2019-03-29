import React from "react";

function ProjectDetail(props) {
  const id = props.match.params.id;
  return (
    <div className="container section oroject-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            <h5>Project Title -{id}</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </span>
        </div>
        <div className="card-action gret grey-text lighten-4">
          <div>Posted by Sb.</div>
          <div>2nd September, 2pm</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
