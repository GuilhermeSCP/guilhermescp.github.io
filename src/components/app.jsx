import React from 'react';
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

import Home from './home.jsx';
import About from './about.jsx';
import Interests from './interests.jsx';
import Projects from './projects.jsx';
import Contact from './contact.jsx';

export default () => (
    <div id="nav">
        <div id="topbar">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="interests">Interests</Link>
            <Link to="projects">Projects</Link>
            <Link to="contact">Contact</Link>
        </div>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/interests' component={Interests}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
    <footer>
        <div id="footer">Made with <i className="fa fa-coffee"></i> by <img src="../img/gui.jpg" title="olá" /></div>
    </footer>
    </div>
);