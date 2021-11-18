import { useContext } from 'react';
import { authContext } from '../user';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setAuthenticated, authenticated } = useContext(authContext);
  //console.log('context value::', { authenticated });
  const handleLogin = () => {
    setAuthenticated(true);
    setTimeout(() => {
      navigate("/restricted/dashboard");
    }, 0)
  };
  let navigate = useNavigate();
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>login</h2>
        <div>
          <label>Username:</label>
          <input></input>
        </div>
        <div>
          <label>Password:</label>
          <input type="password"></input>
        </div>
        <button onClick={handleLogin}>Login</button>
      </main>
    );
  }