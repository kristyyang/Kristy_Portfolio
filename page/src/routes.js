import React from 'react';
import {IndexRoute,Router, Route, hashHistory} from 'react-router';
import App from './container/App/App';
import Home from './container/Home/Home';
import Project from './container/Project/Project';
import AboutMe from './container/AboutMe/AboutMe';
import Resume from './container/Resume/Resume';





export default (
    <Router history={hashHistory}>
        <Route path='/' components={App}>
            <IndexRoute components={Home}/>
            <Route path='/project' components = {Project}/>
            <Route path='/aboutme' components={AboutMe}/>
            <Route path='/resume' components={Resume}/>
        </Route>
    </Router>

);
