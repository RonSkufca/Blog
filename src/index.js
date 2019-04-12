import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './components/homePage.js';
import AboutMePage from './components/aboutMePage.js';
import ContactMePage from './components/contactMePage';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route path='/about' component={AboutMePage}></Route>
            <Route path='/contact' component={ContactMePage}></Route>
        </Switch>                
    </BrowserRouter>
), document.getElementById('root'));
