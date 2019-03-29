import React from "react";
import { Link } from "react-router-dom";
import  SignedInLink from "../layout/SignedInLink";
import SignedOutLink from "../layout/SignedOutLink";

const Navbar = () => {
  return (
    <nav className="nav-wrapper   teal darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          My Plans
        </Link>
        <SignedInLink />
        <SignedOutLink />
      </div>
    </nav>
  );
};

export default Navbar;
