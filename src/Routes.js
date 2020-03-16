import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './containers/Home.js';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import Signup from './containers/Signup';
import NewNote from './containers/NewNote';
import Notes from './containers/Notes';
import Settings from './containers/Settings';
import AppliedRoute from './components/AppliedRoute';

export default function Routes(props){
    return (
        <Switch>
            <AppliedRoute path="/" exact component={Home} appProps={props.appProps}/>
            <AppliedRoute path="/login" exact component={Login} appProps={props.appProps}/>
            <AppliedRoute path="/signup" exact component={Signup} appProps={props.appProps}/>
            <AppliedRoute path="/notes/new" exact component={NewNote} appProps={props.appProps}/>
            <AppliedRoute path="/notes/:id" exact component={Notes} appProps={props.appProps}/>
            <AppliedRoute path="/settings" exact component={Settings} appProps={props.appProps}/>

            { /* Finally, catch all unmatched routes */ }
            <Route component={NotFound} />
        </Switch>
    );
}