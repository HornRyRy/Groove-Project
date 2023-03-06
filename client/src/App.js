import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import Signup from './components/Signup'
import Testing from './components/Testing'
import Home from './components/Home'
import NavBar from "./components/NavBar";
import './App.css';

function App(
) {
  const [count, setCount] = useState(0);
  //const [user, setUser] = useState(null)
  const [page, setPage] = useState("/")


  // useEffect(() => {
  //   fetch("/signup")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path="/testing"element={<Testing />} />
        <Route path="/signup" element={<Signup  />}  />
      </Routes>
    </div>
  );
}

export default App;

//dummy code by ryry