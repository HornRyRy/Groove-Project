import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login(user, setUser) {
  const [formData, setFormData] = useState({
    // name:'',
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { username, password } = formData;

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    console.log(username);

    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setUser(user);
          navigate(`/users/${user.id}`);
        });
      } else {
        resp.json().then((json) => setErrors(json.errors));
      }
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  return (
    <div>
      <h1>This is Login</h1>
      <form onSubmit={handleSubmit}>
        <h2>Login Here</h2>

        <div></div>
        <label>Username </label>
        <input
          placeholder="Username (email)"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <div></div>
        <label>Password </label>
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div></div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
