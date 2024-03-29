import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function NavBar({errors, user, setUser}) {

    let navigate = useNavigate()

    const handleLogout = () =>{
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(resp => {
            if(resp.ok){
                navigate("/login")
                setUser(null)
            }
        })
    }

    // if no user -> Link to '/<Song>

    if(errors) return <h1>errors</h1>
    if(!user) return (
        <nav>
            <ul id="navBar">
                <Link to="/">Home</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
            </ul>
        </nav>
    ) 

    return (
        <nav>
            <ul id="navBar">
                <Link to="/">Home</Link>
                {/* <Link to="/testing">Testing</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link> */}
                <Link to="/playlists">My Playlists</Link>
                <Link to="/songs">Songs List</Link>
                <button onClick={handleLogout}>Logout</button>
            </ul>
        </nav>
    );
}

export default NavBar;