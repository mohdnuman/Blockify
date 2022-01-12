import React, { Component } from 'react';
import { Navbar, MiddleBanner } from './index';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <MiddleBanner />
            </div>
        );
    }
}


export default Home;