import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import Signup from './components/Signup'
import Testing from './components/Testing'
import Home from './components/Home'

function App(
) {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null)
  const [page, setPage] = useState("/")


  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path="/testing"element={<Testing />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

//dummy code by ryry