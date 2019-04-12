import React from 'react';
import AboutMe from './aboutMe';
import Navigation from './navigation.js';
import Footer from './footer.js';
import Header from './header.js';

class AboutMePage extends React.Component {
  render() {
    return (
        <div>
            <Header/>
            <Navigation/>
            <AboutMe/>
            <Footer/>
        </div>
    );
  }
}

export default AboutMePage;