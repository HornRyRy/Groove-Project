import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Signup({ }) {

const [name, setName] = useState('')
const [user, setUser] = useState('')
const [password, setPassword] = useState('')


    function handleSubmit(e){
        e.preventDefault()
        //more code to handle form submission
    }

    return (
        <div>
            <h1>This is signup</h1>
            <form onSubmit= {handleSubmit}>
                <h2>Signup Here</h2>
                <div></div>
                <label>Name </label>
                <input placeholder="App will call you by this" type='text' name='name' value={name} onChange={e => setName(e.target.value)} />
                <div></div>
                <label>Username </label>
                <input placeholder="Username (email)" type='text' name='username' value={user} onChange={e => setUser(e.target.value)} />
                <div></div>
                <label>Password </label>
                <input placeholder="Password" type='text' name='password' value={password} onChange={e => setPassword(e.target.value)} />
                <div></div>
                <input type='submit' value='Register' />
            </form>
        </div>
    );
}

export default Signup;
