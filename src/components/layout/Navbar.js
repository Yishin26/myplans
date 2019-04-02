import React from "react";
import { Link } from "react-router-dom";
import  SignedInLink from "../layout/SignedInLink";
import SignedOutLink from "../layout/SignedOutLink";
import {connect} from 'react-redux'


const Navbar = (props) => {
  const {auth}=props;
  //console.log(auth);
  const link = auth.uid ? <SignedInLink /> : <SignedOutLink />;
  return (
    <nav className="nav-wrapper   teal darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          My Plans
        </Link>
       
       {link}
      </div>
    </nav>
  );
};
const mapStateToProps = state => {
 
  return {
    auth: state.firebase.auth
  };
};


export default connect(mapStateToProps)(Navbar);
