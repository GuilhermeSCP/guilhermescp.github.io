import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import HomeHandler from './components/home.js';
import AboutHandler from './components/about.js';
import InterestsHandler from './components/interests.js';
import ProjectsHandler from './components/projects.js';
import ContactHandler from './components/contact.js';

let App = React.createClass({  
    render() {
        return(
            <div id="nav">
            <div id="topbar">
                <Link to="app">Home</Link>
                <Link to="about">About</Link>
                <Link to="interests">Interests</Link>
                <Link to="projects">Projects</Link>
                <Link to="contact">Contact</Link>
            </div>

                {/* this is the important part */}
                <RouteHandler/>
            </div>
        );
  }
});

let routes = (  
    <Route name="app" path="/" handler={App}>
        <Route name="home" path="/" handler={HomeHandler}/>
        <Route name="about" path="/about" handler={AboutHandler}/>
        <Route name="interests" path="/interests" handler={InterestsHandler}/>
        <Route name="projects" path="/projects" handler={ProjectsHandler}/>
        <Route name="contact" path="/contact" handler={ContactHandler}/>
    </Route>
);

Router.run(routes, function (Handler) {  
    React.render(<Handler/>, document.body);
});