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
            {" "}
            Contact.
          </Fade>
        </h1>
        <Fade bottom>
          <div className="contact-content">
            <h2>
              Let’s create your next
              <span className="amazing-color"> experience together.</span>
            </h2>
            <a href={`mailto:${data.contactEmail}`} className="email">
              {data.contactEmail}
            </a>
          </div>
          <div className="social_links">
            <h2> or kindly reach me out through</h2>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/fitri-annisa-ahlul-jannah/">
                  <FaLinkedin></FaLinkedin>
                </a>
              </li>
              <li>
                <a href="https://github.com/ftrannisa">
                  <FaGithub></FaGithub>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/fitrinshl">
                  <FaInstagram></FaInstagram>
                </a>
              </li>
            </ul>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Contact;
