import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "../layout/SignedInLink";
import SignedOutLink from "../layout/SignedOutLink";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;
  //console.log(auth);
  const link = auth.uid ? (
    <SignedInLink profile={profile} />
  ) : (
    <SignedOutLink />
  );
  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper  teal darken-3 ">
        <div className="container">
          <Link to="/" className="brand-logo">
            My Plans
          </Link>

          {link}
        </div>
      </nav>{" "}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
