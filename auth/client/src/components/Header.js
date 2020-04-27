import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.css";

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Link to="/feature">Feature</Link>
          <Link to="/signout">Sign Out</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Login</Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div class="header">
        <Link to="/">Redux Auth</Link>
        {this.renderLinks()}
      </div>
    );
  }
}

function mapStateToprops(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToprops)(Header);
