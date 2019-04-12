import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/homePage';
import AboutPage from './components/aboutPage';

const CustomRoutes  = () => (    
    <Router>
        <Route path='/' component={HomePage}></Route>        
    </Router>
)

export default CustomRoutes;