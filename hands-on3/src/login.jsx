import { useState } from "react";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");

  function checkLogin() {
    if (user && pass) {
      setMsg("Login Successful");
    } else {
      setMsg("Please enter username and password");
    }
  }

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUser(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
      />

      <br /><br />

      <button onClick={checkLogin}>Login</button>

      <p>{msg}</p>
    </div>
  );
}

export default Login;