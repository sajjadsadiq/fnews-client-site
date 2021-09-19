import { Link } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Enter Your Email....." />
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Enter Your Password....." />
          <button className="loginButton">Login</button>
        </form>
        <button className="registerButton">
          <Link className="Link" to="/register">
            Register
          </Link>
        </button>
      </div>
    </div>
  );
};
