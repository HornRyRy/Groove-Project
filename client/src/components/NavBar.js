import React from 'react';
import { Link } from 'react-router-dom'

function NavBar(props) {
    return (
        <nav>
            <ul id="navBar">
                <Link to="/">Home</Link>
                <Link to="/testing">Testing</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
                <Link to="/search">Search</Link>
            </ul>
            
        </nav>
    );
}

export default NavBar;