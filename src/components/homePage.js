import React from 'react';
import Navigation from './navigation.js';
import Footer from './footer.js';
import Header from './header.js';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Navigation/>
                <Footer/>
            </div>
        );
    }
}

export default HomePage;