import React from "react";
import { useState, useEffect } from "react";
// import { Routes, Route, useRoutes } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Signup from './components/Signup'
import Login from "./components/Login";
// import Testing from './components/Testing'
import Home from './components/Home'
import NavBar from "./components/NavBar";
import Playlists from "./components/Playlists";
import Songs from "./components/Songs";
import './App.css';

function App(
) {
  // const [count, setCount] = useState(0);
  const [user, setUser] = useState(null)
  // const [page, setPage] = useState("/")
  const [errors, setErrors] = useState(false)
  const [myPlaylists, setMyPlaylists] = useState([]);

  useEffect(() =>{
    fetch('/authorized')
    .then(resp =>{
      if(resp.ok){
        resp.json().then(user => setUser(user))
      }
    })
  }, [])

  //<Route useRoutes=(["/signup", "/testing", "/song"]) element={<Signup user={user} setUser={setUser} />}  />

  if(errors) return <h1>errors</h1>
  if(!user) return (
    <div className="App">

      <NavBar errors={errors} user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path="/signup" element={<Signup setUser={setUser} />}  />
        <Route path="/login" element={<Login setUser={setUser}/>}  />
      </Routes>

    </div>
  )

  return (
    <div className="App">

      <NavBar errors={errors} setErrors={setErrors} user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<Home /> }/>
        {/* <Route path="/testing"element={<Testing />} />
        <Route path="/signup" element={<Signup user={user} setUser={setUser} />}  />
        <Route path="/login" element={<Login user={user} setUser={setUser}/>}  /> */}
        <Route path="/playlists" element={<Playlists user={user} myPlaylists={myPlaylists} setMyPlaylists={setMyPlaylists} />}/>
        <Route path="/songs" element={<Songs user={user} myPlaylists={myPlaylists} setMyPlaylists={setMyPlaylists} />}/>
      </Routes>

    </div>
  );
}

export default App;

//dummy code by ryry