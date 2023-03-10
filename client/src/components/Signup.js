// import { useState, useEffect } from 'react'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'


function Signup({ user, setUser }) {

const [name, setName] = useState('')
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')


    function handleSubmit(e){
        e.preventDefault()
        const user ={
            name, 
            username,
            password
        }
        fetch('/users', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
        .then(resp => {
            if(resp.status === 201){
                resp.json().then(user => setUser(user))
                console.log("Users post status 201")
            }else{
                resp.json().then(console.log("no 201 status"))
            }
        })
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
                <input placeholder="Username (email)" type='text' name='username' value={username} onChange={e => setUsername(e.target.value)} />
                <div></div>
                <label>Password </label>
                <input placeholder="Password" type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} />
                <div></div>
                <input type='submit' value='Register' />
            </form>
        </div>
    );
}

export default Signup;
