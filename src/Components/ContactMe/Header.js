import React, { Component } from "react";
import { Navigation } from "../layout/Navigation";

class Header extends Component {
  render() {
    return (
      <header id="contactme" style={{ height: "50px", minHeight: "auto" }}>
        <Navigation active="contactme" />
      </header>
    );
  }
}

export default Header;
