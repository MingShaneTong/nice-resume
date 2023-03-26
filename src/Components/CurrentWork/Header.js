import React, { Component } from "react";
import { Navigation } from "../layout/Navigation";

class Header extends Component {
  render() {
    return (
      <header id="currentwork" style={{ height: "50px", minHeight: "auto" }}>
        <Navigation active="currentwork" />
      </header>
    );
  }
}

export default Header;
