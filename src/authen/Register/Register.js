import React from "react";
import CustomHeader from "../../multiComponents/CustomHeader/CustomHeader";
import "./Register.css";

export default function () {
  return (
    <div id="regisContainer">
      <div id="regisContent">
        <CustomHeader />
        <div id="formRegis">
          <img
            src={require("./../../assets/icons/WqVDjHRB4ek5dJqBmMFGEJ.png")}
            alt=""
          />
          <p>FullName</p>
          <input type="text" placeholder="Alex Thunder" />
          <p>Email</p>
          <input type="text" placeholder="...@gmail.com" />
          <p>Password</p>
          <input type="password" placeholder="*******" />

          <button>
            <img
              src={require("./../../assets/icons/whiteSignin3d.png")}
              alt=""
            />
            <p>Register</p>
          </button>

          <div id="signUpView">
            <p>Already have an account?</p>
            <h2>
              <a href="/login">Sign In</a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
