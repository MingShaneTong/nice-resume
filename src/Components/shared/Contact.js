import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const city = this.props.data.address.city;
    const email = this.props.data.email;
    const message = this.props.data.contactmessage;

    const formaction = this.props.data.contactform.action;
    const nameentry = this.props.data.contactform.nameentry;
    const emailentry = this.props.data.contactform.emailentry;
    const subjectentry = this.props.data.contactform.subjectentry;
    const messageentry = this.props.data.contactform.messageentry;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form action={formaction} method="post" id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor={nameentry}>
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id={nameentry}
                      name={nameentry}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor={emailentry}>
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      defaultValue=""
                      size="35"
                      id={emailentry}
                      name={emailentry}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor={subjectentry}>
                      Subject <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id={subjectentry}
                      name={subjectentry}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor={messageentry}>
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id={messageentry}
                      name={messageentry}
                    ></textarea>
                  </div>

                  <div>
                    <button type="submit" className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning">Error</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Contact Information</h4>
                <p>
                  {name}
                  <br />
                  {city}
                </p>
                <h5>Email</h5>
                <p>
                  {email}
                </p>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
