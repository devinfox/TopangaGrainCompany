import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

const NavBar = props => (
    <header className="NavBar">
        <nav className="NavBar_navigation">
            
            <div className="logo-mobile">
            <Link to='/'>
            <div className="NavBar_Logo"><img src="https://i.imgur.com/l6BBZBA.png" height="125" width="125" /></div>
            </Link>
            </div>
            
            <div className="spacer"></div>
            <div className="NavBar_items">
                <ul>
                    <Link to ='/about'>
                    <li>About Us</li>
                    </Link>
                 
                    <li><a href="/">Products</a></li>
                </ul>
            </div>
        </nav>
    </header>
);
export default NavBar;