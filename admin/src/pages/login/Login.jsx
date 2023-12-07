import React, { useContext, useState } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (

    <div className="logins">
      <form className="loginForms">
        <div className="contents">
        <h2>Sign In</h2> 
        <input
          type="text"
          placeholder="Email"
          className="loginInputs onlyInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="loginInputs onlyInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="loginInputs onlyButton"
          onClick={handleLogin}
          disabled={isFetching}
        >
          Login
        </button>
        </div>
      </form>
    </div>
  );
}