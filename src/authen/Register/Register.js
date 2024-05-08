import React, { useState } from "react";
import CustomHeader from "../../multiComponents/CustomHeader/CustomHeader";
import "./Register.css";

export default function () {
  const [firstName, setFirstName] = useState("Le");
  const [lastName, setLastName] = useState("Cat");
  const [email, setEmail] = useState("cattc1405@gmail.com");
  const [password, setPassword] = useState("123456");

  return (
    <div id="regisContainer">
      <div id="regisContent">
        <CustomHeader />
        <div id="formRegis">
          <img
            src={require("./../../assets/icons/WqVDjHRB4ek5dJqBmMFGEJ.png")}
            alt=""
          />
          <div className="formRegisContent">
            <div className="fullname">
              <div>
                <p>FirstName</p>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Alex"
                />
              </div>
              <div>
                <p>LastName</p>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Horny"
                />
              </div>
            </div>
            <p>Email</p>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="...@gmail.com"
            />
            <p>Password</p>
            <input
              type="password"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="*******"
            />
            <p>Password Confirm</p>
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
    </div>
  );
}
