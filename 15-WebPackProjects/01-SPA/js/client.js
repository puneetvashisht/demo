//var React = require('react');

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, IndexRoute, Route, hashHistory } from 'react-router';

import Layout from './components/layout';
import Home from './components/home';
import Login from './components/login';
import Registration from './components/registration';

//ReactDOM.render(<Layout />, document.getElementById("my-app"));
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="login" component={Login}></Route>
            <Route path="signup" component={Registration}></Route>
        </Route>
    </Router>
    
    
    , document.getElementById("my-app"));

