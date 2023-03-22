import React, { Component } from "react";
import Fade from "react-reveal";

class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function(project) {
      return (
        <Fade duration={1000}>
          <div className="project">
            <div className="row">
              <div className="six columns main-col">
                <h2>{project.subtitle}</h2>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <ul className="technologies">
                  {project.technologies.map((tech) => <li>{tech}</li>)}
                </ul>
                <ul className="links">
                  {project.links.map((link) => {
                    return (
                      <li className={link.className}>
                        <a href={link.url}>
                          <span>{link.text}</span>
                          <i class="fa fa-angle-right"></i>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="six columns image-col">
                  <img src={"images/portfolio/" + project.image} />
              </div>
            </div>
          </div>
          
        </Fade>
      );
    });

    return (
      <section id="portfolio">
        {projects}
      </section>
    );
  }
}

export default Portfolio;
