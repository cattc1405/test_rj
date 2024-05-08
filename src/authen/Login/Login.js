import React, { useEffect, useState } from "react";
import "./Login.css";
import CustomHeader from "../../multiComponents/CustomHeader/CustomHeader";
import { loginApi } from "../../service/UserService";
import { toast } from "react-toastify";
import { Alert } from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState("dangtrongtai2012@gmail.com");
  const [password, setPassword] = useState("testpassword");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Vui lòng nhập đầy đủ!");
      return;
    }
    else

    try {
      setLoading(true);

      let res = await loginApi(email, password);
      if (res.status === "success") {
        localStorage.setItem("token", res.data.token);
        window.location.href = "/profile";
      }
      else if(res.message === "Incorrect email or password") {
        console.log("Fail ");
        toast.error(
          "Đăng nhập không thành công. Vui lòng kiểm tra thông tin đăng nhập của bạn."
        );
      }
    } catch (error) {
      console.error("Lỗi đăng nhập: ", error);
      toast.error(
        "Đã xảy ra lỗi trong quá trình đăng nhập. Vui lòng thử lại sau."
      );
    } finally {
      setLoading(false);
    }
  };

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
          <input
            type="text"
            placeholder="...@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*******"
          />
          {/* <a href="/profile"> */}
          {loading ? (
            <button onClick={() => handleLogin()} disabled={loading} className="loadingButton">
              <>
                <div className="spinner"></div>
                <p className="loading-text">Loading...</p>
              </>
            </button>
          ) : (
            <button onClick={() => handleLogin()} disabled={loading}>
              <>
                <img
                  src={require("./../../assets/icons/whiteSignin3d.png")}
                  alt=""
                />
                <p>Đăng nhập</p>
              </>
            </button>
          )}
          {/* </a> */}
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
