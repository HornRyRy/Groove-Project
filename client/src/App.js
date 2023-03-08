import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useRoutes } from "react-router-dom"
import Signup from './components/Signup'
import Login from "./components/Login";
import Testing from './components/Testing'
import Home from './components/Home'
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import './App.css';

function App(
) {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null)
  const [page, setPage] = useState("/")
  const [errors, setErrors] = useState(false)

  useEffect(() =>{
    fetch('/authorized')
    .then(resp =>{
      if(resp.ok){
        resp.json().then(user => setUser(user))
        setUser(null)
      }
    })

  },[])

  function navBarRenderYesUser(){

  }

  // <Route useRoutes=(["/signup", "/testing", "/search"]) element={<Signup user={user} setUser={setUser} />}  />

  // if(errors) return <h1>errors</h1>
  // if(!user) return (
  //   <div className="App">

  //     <NavBar errors={errors} setErrors={setErrors} />
  //     <Routes>
  //       <Route path='/' element={<Home /> }/>
     
  //       <Route path="/signup" element={<Signup user={user} setUser={setUser} />}  />
  //       <Route path="/login" element={<Login user={user} setUser={setUser}/>}  />
  //       <Route path="/search" element={<Testing />}/>
  //     </Routes>

  //   </div>
  // ) 


  return (

    <div className="App">

      <NavBar errors={errors} setErrors={setErrors} />
      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path="/testing"element={<Testing />} />
        <Route path="/signup" element={<Signup user={user} setUser={setUser} />}  />
        <Route path="/login" element={<Login user={user} setUser={setUser}/>}  />
        
        <Route path="/search" element={<Search />}/>
      </Routes>

    </div>

  );
}

export default App;

//dummy code by ryry