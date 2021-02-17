import React, { Component } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import data from "../data";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>
          <Fade bottom cascade>
            So, would you be mine?
          </Fade>
        </h1>
        <img src="https://cdn.akurat.co/images/uploads/images/akurat_20200605053308_QVkR08.jpg" alt="Girl in a jacket"></img>
        <Fade>
          <div className="contact-content">
            <h2  className="email">
              Let’s create our
              <span className="amazing-color"> exquisite journey together.</span>
            </h2>
            {/* <a href={`mailto:${data.contactEmail}`}>
              {data.contactEmail}
            </a> */}
          </div>
        </Fade>
      </div>
    );
  }
}

export default Contact;
