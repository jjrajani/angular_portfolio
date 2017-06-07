import React, { Component } from 'react';
import './nav.scss';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
       <div id="nav">
         <NavLink to="/home" activeClassName="active">Home</NavLink>
         <NavLink to="/resume" activeClassName="active">Resum&#233;</NavLink>
         <NavLink to="/projects" activeClassName="active">Projects</NavLink>
         <NavLink to="/contact" activeClassName="active">Contact</NavLink>
       </div>
    );
  }
}

export default Nav;
