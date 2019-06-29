import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './views/home/home';
import Login from './views/login/login';
import Register from './views/register/register';
// import Dog_park from './views/parks/Dog_park';

export default (
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/home' component={Home}/>
        <Route path="/register" component={Register}/>
        {/* <Route path='/parks' component={Dog_park}> */}
    </Switch>
)