import React from 'react';
import Navigation from './navigation.js';
import Footer from './footer.js';
import Header from './header.js';
import ContactMe from './contactMe';

class ContactMePage extends React.Component {
  render() {
    return (
        <div>
            <Header/>
            <Navigation/>
            <ContactMe/>
            <Footer/>
        </div>
    );
  }
}

export default ContactMePage;