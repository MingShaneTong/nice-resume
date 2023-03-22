import React, { Component } from "react";
import { Navigation } from "../layout/Navigation";

class Header extends Component {
  render() {
    return (
      <header id="projects" style={{ height: "50px", minHeight: "auto" }}>
        <Navigation active="projects" />
      </header>
    );
  }
}

export default Header;
