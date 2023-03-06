import { useState, useEffect } from "react";
import NavBar from './components/NavBar';
import Header from './components/Header';

function App(
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <h1>Groove</h1>
      <h1>Page Count: {count}</h1>
      <div>
        <NavBar />
        <Header />
      </div>
    </div>
  );
}

export default App;
