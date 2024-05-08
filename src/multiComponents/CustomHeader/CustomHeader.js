import React, { useEffect,useState } from "react";
import "./CustomHeader.css";

export default function CustomHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); 
  }, []);

  return (
    <div id="topBar">
      <a href="/dashboard">
        <img
          src={require("../../assets/icons/WqVDjHRB4ek5dJqBmMFGEJ.png")}
          alt=""
        />
      </a>
      <div id="searchView">
        <button>
          <img src={require("../../assets/icons/white_search_icon.png")} />
        </button>
        <input type="text" placeholder="Search Movie Name from here" />
      </div>

      <div id="infoView">
        <p>
          <a href="/movies">Movies</a>
        </p>
        <p>
          <a href="/aboutus">About Us</a>
        </p>
        <p>
          <a href="/contactus">Contact Us</a>
        </p>
        <div>
        {isLoggedIn ? (
          <a href="/profile">
            <img src={require("../../assets/icons/usericon.png")} alt="" />
          </a>
        ) : (
          <a href="/login">
            <img src={require("../../assets/icons/usericon.png")} alt="" />
          </a>
        )}
        </div>
        <div id="whiteHeartIcon">
          <a href="">
            {" "}
            <img src={require("../../assets/icons/whiteheart.png")} alt="" />
          </a>
          <div id="quantityFavorite">
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
