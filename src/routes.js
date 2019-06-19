import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './views/home/home';
import Login from './views/login/login';
import Profile from './views/profile/profile';

export default (
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/home' component={Home}/>
        <Route path='/profile' component={Profile}/>
    </Switch>
)