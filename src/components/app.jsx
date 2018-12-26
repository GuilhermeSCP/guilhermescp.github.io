import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import ReactDOM from "react-dom";

import HomeHandler from './components/home.jsx';
import AboutHandler from './components/about.jsx';
// import InterestsHandler from './components/interests.jsx';
// import ProjectsHandler from './components/projects.jsx';
// import ContactHandler from './components/contact.jsx';

const App = () => (
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
        <footer><div id="footer">Made with <i className="fa fa-coffee"></i> by <img src="../img/gui.jpg" /></div></footer>
    </div>
);

const routes = (  
    <Route name="app" path="/" handler={App}>
        <Route name="home" path="/" handler={HomeHandler}/>
        <Route name="about" path="/about" handler={AboutHandler}/>
        <Route name="interests" path="/interests" handler={InterestsHandler}/>
        <Route name="projects" path="/projects" handler={ProjectsHandler}/>
        <Route name="contact" path="/contact" handler={ContactHandler}/>
    </Route>
);

// Router.run(routes, function (Handler) {  
//     React.render(<Handler/>, document.body);
// });

ReactDOM.render(<App />, document.getElementById("app"));
