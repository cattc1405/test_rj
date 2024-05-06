import React, { useState, useEffect } from "react";
import "./MenuAd.css";
import { NavLink } from "react-router-dom";

export default function MenuAd() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index) => {
    setSelectedItem(index);
    localStorage.setItem("selectedItem", index);
  };

  useEffect(() => {
    const savedSelectedItem = localStorage.getItem("selectedItem");
    if (savedSelectedItem !== null) {
      setSelectedItem(savedSelectedItem);
    }
  }, []);
  useEffect(() => {
    const currentPath = window.location.pathname;
    switch (currentPath) {
      case "/dashboard":
        setSelectedItem(0);
        break;
      case "/movieslist":
        setSelectedItem(1);
        break;
        case "/addmovies":
          setSelectedItem(2);
        break;
        case "/categories":
          setSelectedItem(3);
        break;
        case "/users":
          setSelectedItem(4);
          break;
      default:
        break;
    }
  }, []);

  return (
    <div id="menuAd">
      <a href="/dashboard">
        <div className={selectedItem === 0 ? "selected" : ""}>
          <div className="imgView">
            <img src={require("../../assets/icons/orangeSetting.png")} alt="" />
          </div>
          <p>Dashboard</p>
        </div>
      </a>
      <a href="/movieslist">
        <div className={selectedItem == 1 ? "selected" : ""}>
          <div className="imgView">
            <img src={require("../../assets/icons/orangeSetting.png")} alt="" />
          </div>
          <p>Movies List</p>
        </div>
      </a>
      <a href="/addmovies">
        <div
          onClick={() => handleClick(2)}
          className={selectedItem == 2 ? "selected" : ""}
        >
          <div className="imgView">
            <img src={require("../../assets/icons/orangeSetting.png")} alt="" />
          </div>
          <p>Add Movie</p>
        </div>
      </a>
      <a href="/categories">
        <div
          onClick={() => handleClick(3)}
          className={selectedItem == 3 ? "selected" : ""}
        >
          <div className="imgView">
            <img src={require("../../assets/icons/orangeSetting.png")} alt="" />
          </div>
          <p>Categorires</p>
        </div>
      </a>
      <a href="/users">
        <div
          onClick={() => handleClick(4)}
          className={selectedItem == 4 ? "selected" : ""}
        >
          <div className="imgView">
            <img src={require("../../assets/icons/orangeSetting.png")} alt="" />
          </div>
          <p>Users</p>
        </div>
      </a>
      <a href="/profile">
        <div
          className={selectedItem === 5 ? "selected" : ""}
        >
          <div className="imgView">
            <img src={require("../../assets/icons/orangeSetting.png")} alt="" />
          </div>
          <p>Update Profile</p>
        </div>
      </a>
      <a href="/login">
        <div
          className={selectedItem === 6 ? "selected" : ""}
        >
          <div className="imgView">
            <img src={require("../../assets/icons/orangeSetting.png")} alt="" />
          </div>
          <p>Favorites Movies</p>
        </div>
      </a>
      <a href="/login">
        <div
          className={selectedItem == 7 ? "selected" : ""}
        >
          <div className="imgView">
            <img src={require("../../assets/icons/orangeSetting.png")} alt="" />
          </div>
          <p>Change Password</p>
        </div>
      </a>
      <a href="/login">
        <div
          className={selectedItem == 8 ? "selected" : ""}
        >
          <div className="imgView">
            <img src={require("../../assets/icons/orangeSetting.png")} alt="" />
          </div>
          <p>Logout</p>
        </div>
      </a>
    </div>
  );
}
