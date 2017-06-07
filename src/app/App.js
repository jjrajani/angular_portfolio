import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from 'react-router-dom';
import logo from './logo.svg';
import './app.scss';

import { Contact, Home, Projects, Resume, Nav, Footer } from "./components";

class App extends Component {
  render() {
    return (
      <Router>
        <div id="app">
          <div className="app-header">
            <p className="name">Jenna Rajani</p>
            <Nav />
          </div>
          <Switch>
            <Redirect exact from ="/" to="home"/>
            <Route exact path="/home" component={Home}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
