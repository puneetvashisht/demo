import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
    navigate(){
        console.log(this.props.children);
//        this.props.history.pushState(null, "/");
        this.props.history.replaceState(null, "/");
    }
  render() {
    return (
      <div>
          <h1>My WebSite</h1>
          {this.props.children}
        <button onClick={this.navigate.bind(this)} class="btn btn-info">Featured</button>
        <Link to="archives"  class="btn btn-primary">Archives</Link>
        <Link to="settings"><button class="btn btn-success">Settings</button></Link>
      </div>

    );
  }
}
