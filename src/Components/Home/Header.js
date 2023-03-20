import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { Navigation, TopButton } from "../layout/Navigation";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const linkedin = this.props.data.linkedin;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="lines" bg={true} />
        <Navigation active="home" />

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={linkedin} className="button btn">
                  <i className="fa fa-linkedin"></i>LinkedIn
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" data-anchor="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
        <TopButton display={false} />
      </header>
    );
  }
}

export default Header;
