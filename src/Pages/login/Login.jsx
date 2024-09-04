import { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";
import { signup } from "../../config/firebase";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign up");
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  return (
    <div className="login">
      <img src={assets.logo_big} alt="Logo" className="logo" />
      <form className="loginForm">
        <h2>{currentState}</h2>
        {currentState === "Sign up" ? (
          <input
            type="text"
            placeholder="Enter your username"
            required
            className="formInput"
          />
        ) : null}
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="formInput"
        />
        <input
          type="password"
          placeholder="Enter your password"
          required
          className="formInput"
        />
        <button type="submit">
          {currentState === "Sign up" ? "Create Account" : "Login Now"}
        </button>
        <div className="loginTerm">
          <input type="checkbox" />
          <p>Agree to the term of use and privacy policy.</p>
        </div>
        <div className="LoginForgot">
          {currentState === "Sign up" ? (
            <p className="loginToggle">
              Already have an account?{" "}
              <span onClick={() => setCurrentState("Login")}>click here</span>{" "}
            </p>
          ) : (
            <p className="loginToggle">
              Are you a new user?{" "}
              <span onClick={() => setCurrentState("Sign up")}>Sign up</span>{" "}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
