import React from "react";
import "./Login.css";
import CustomHeader from "../../multiComponents/CustomHeader/CustomHeader";

export default function Login() {
  return (
    <div id="loginContainer">
      <div id="loginContent">
        <CustomHeader />
        <div id="formLogin">
          <img
            src={require("./../../assets/icons/WqVDjHRB4ek5dJqBmMFGEJ.png")}
            alt=""
          />
          <p>Email</p>
          <input type="text" placeholder="...@gmail.com" />
          <p>Password</p>
          <input type="password" placeholder="*******" />
          <a href="/profile">
            <button>
              <img
                src={require("./../../assets/icons/whiteSignin3d.png")}
                alt=""
              />
              <p>Sign In</p>
            </button>
          </a>
          <div id="signUpView">
            <p>Don't have an account?</p>
            <h2>
              <a href="/register">Sign Up</a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
