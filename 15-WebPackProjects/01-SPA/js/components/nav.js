import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <nav class="navbar navbar-default" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="navbar-collapse collapsed" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li>
                <IndexLink to="/">Home</IndexLink>
              </li>
              <li>
                <Link to="login" >Login</Link>
              </li>
              <li>
                <Link to="signup" >SignUp</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
