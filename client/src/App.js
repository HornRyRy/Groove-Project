import React from "react";
import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom"

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


  // useEffect(() => {
  //   fetch("/signup")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  // function navBarRenderNoUser(){
  //   // TODO -conditional rendering of navbar dependent on a user logged in
  //   return (

  //     <div className="App">
  
  //       <NavBar />
  //       <Routes>
  //         <Route path='/' element={<Home /> }/>
  //         <Route path="/testing"element={<Testing />} />
  //         <Route path="/signup" element={<Signup user={user} setUser={setUser} />}  />
  //         <Route path="/login" element={<Login />} user={user} setUser={setUser} />
  //         <Route path="/search" element={<Search />}/>
  //       </Routes>
  
  //     </div>
  
  //   );
  // }

  function navBarRenderYesUser(){

  }


  return (

    <div className="App">

      <NavBar />
      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path="/testing"element={<Testing />} />
        <Route path="/signup" element={<Signup user={user} setUser={setUser} />}  />
        <Route path="/login" element={<Login />} user={user} setUser={setUser} />
        <Route path="/search" element={<Search />}/>
      </Routes>

    </div>

  );
}

export default App;

//dummy code by ryry