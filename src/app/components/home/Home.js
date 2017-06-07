import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './home.scss';
const logo = require("../../assets/trythree.png");
const culturaLink = require("../../assets/culturalink.png");
const ADP = require("../../assets/ADP.png");
const mailChimp = require("../../assets/mail-chimp.png");
const PSP = require("../../assets/PSP.png");
// const logo = require("../../assets/lost_in_the_trees_small.jpg");
const laptop = `https://placeit.net/uploads/stage/stage_image/288/default_apple-2012-15-inch-macbook-pro-retina-big.png`;

class Resume extends Component {
  render() {
    return (
      <div className="main-content">
        <div id="home">
          <div className="sub-content">
            <div className="sub-header">
              <p>Home</p>
              <NavLink to="/resume">Resum&#233; <i className="fa fa-angle-right" aria-hidden="true"></i></NavLink>
            </div>
            <div className="title-wrapper">
              <p className="title one">WEB DEVELOPER</p>
              <p className="title two">FRONT–END ENGINEER</p>
            </div>
            <div className="blurb-wrapper">
              <p className="blurb">I&#8216;m Jenna Rajani and love code for it&#8216;s endless possibility. I enjoy focusing on the user-experience as well as process efficiency while creating web applications.</p>
              <p className="blurb">I have contributed to more than 3 large-scale applications and many smaller, design centered, applications. When I&#8216;m not coding you&#8216;ll find me either playing paino or planning my next excurssion.</p>
            </div>
            <div className="home-image">
              <img src={logo} alt="lost in the trees"/>
            </div>
          </div>
          <div className="sub-content">
            <div className="sub-header">
              <p>Projects</p>
              <NavLink to="/projects">See more <i className="fa fa-angle-right" aria-hidden="true"></i></NavLink>
            </div>
            <div className="projects">
              <div className="project">
                <div className="screen-shot">
                  <img className="image" src={ADP} alt="CulturaLink screen shot"/>
                  <img className="laptop" src={laptop}/>
                </div>
                <p className="title">ADP Monitoring Services</p>
                <p className="language">ReactJS</p>
              </div>
              <div className="project">
                <div className="screen-shot">
                  <img className="image" src={culturaLink} alt="CulturaLink screen shot"/>
                  <img className="laptop" src={laptop}/>
                </div>
                <p className="title">CulturaLink Interpretation</p>
                <p className="language">ReactJS</p>
              </div>
              <div className="project">
                <div className="screen-shot">
                  <img className="image" src={mailChimp} alt="CulturaLink screen shot"/>
                  <img className="laptop" src={laptop}/>
                </div>
                <p className="title">MailChimp Annual Report</p>
                <p className="language">Ruby on Rails</p>
              </div>
              <div className="project">
                <div className="screen-shot">
                  <img className="image" src={PSP} alt="CulturaLink screen shot"/>
                  <img className="laptop" src={laptop}/>
                </div>
                <p className="title">PSP Printing</p>
                <p className="language">Angular2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
