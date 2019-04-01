import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLink = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating  cyan darken-2">
          LL
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLink;
