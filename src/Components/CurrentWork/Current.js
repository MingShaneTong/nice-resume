import React, { Component } from "react";
import Slide from "react-reveal";

class Current extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (project) {
      return (
        <Slide left duration={1300}>
          <div className="current">
            <div className="row">
              <div className="twelve columns main-col">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <ul className="technologies tags">
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
            </div>
          </div>
        </Slide>
      );
    })

    
    const courses = this.props.data.courses.map(function (course) {
      return (
        <Slide left duration={1300}>
          <div className="current">
            <div className="row">
              <div className="twelve columns main-col">
                <h2>{course.title}</h2>
                <p>{course.description}</p>
                <ul className="links">
                  {course.links.map((link) => {
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
            </div>
          </div>
        </Slide>
      );
    })

    return (
      <section id="current">
        <Slide left duration={1300}>
          <div className="row">
            <div className="twelve columns main-col">
              <h1 className="task-isolated-heading">Current Project</h1>
            </div>
          </div>
        </Slide>
        {projects}

        <Slide left duration={1300}>
          <div className="row task">
            <div className="twelve columns main-col">
              <h1 className="task-isolated-heading">Current Course</h1>
            </div>
          </div>
        </Slide>
        {courses}
      </section>
    );
  }
}

export default Current;
