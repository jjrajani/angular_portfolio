import React, { Component } from 'react';
import './footer.scss';
import { NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="left">
          <a href="http://www.github.com/jjrajani" target="blank"><i className="fa fa-github-square" aria-hidden="true"/>Github</a>
          <a href="https://www.linkedin.com/in/jenna-rajani/" target="blank"><i className="fa fa-linkedin-square" aria-hidden="true"/>Linkedin</a>
        </div>
        <div className="center">
          <a href="#app">Top</a>
        </div>
        <div className="right">
          <NavLink to="/home" activeClassName="active">Home</NavLink>
          <NavLink to="/resume" activeClassName="active">Resum&#233;</NavLink>
          <NavLink to="/projects" activeClassName="active">Projects</NavLink>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </div>
      </div>
    );
  }
}

export default Footer;
