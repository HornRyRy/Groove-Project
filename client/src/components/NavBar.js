import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function NavBar(props) {

    let navigate = useNavigate()

    const handleLogout = () =>{
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(resp => {
            if(resp.ok){
                navigate("/login")
            }
        })
    }

    return (
        <nav>
            <ul id="navBar">
                <Link to="/">Home</Link>
                <Link to="/testing">Testing</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
                <Link to="/search">Search</Link>
                <button onClick={handleLogout}>Logout</button>
            </ul>
            
        </nav>
    );
}

export default NavBar;