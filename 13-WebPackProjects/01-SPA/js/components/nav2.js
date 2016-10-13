import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed: collapsed});
  }

  render() {
    const navClass = this.state.collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-default" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li>
                <Link to="login" onClick={this.toggleCollapse.bind(this)}>Login</Link>
              </li>
              <li>
                <Link to="signup" onClick={this.toggleCollapse.bind(this)}>SignUp</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
