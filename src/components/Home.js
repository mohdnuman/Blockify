import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, MiddleBanner } from './index';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Link to="/create">
                <button id="create-nav-button">Create A Product</button>
                </Link>
                <MiddleBanner />
            </div>
        );
    }
}


export default Home;