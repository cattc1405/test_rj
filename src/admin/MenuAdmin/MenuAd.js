import React, { useState, useEffect } from "react";
import "./MenuAd.css";

export default function MenuAd() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index) => {
    setSelectedItem(index === selectedItem ? null : index);
  };

  return (
    <div id="menuAd">
      <a href="/dashboard">
        <div
          onClick={() => handleClick(0)}
          className={selectedItem === 0 ? "selected" : ""}
        >
          <div className="imgView">
            <img src={require("../../assets/icons/orangeSetting.png")} alt="" />
          </div>
          <p>Dashboard</p>
        </div>
      </a>
      <a href="/favorites">
        <div
          onClick={() => handleClick(1)}
          className={selectedItem === 1 ? "selected" : ""}
        >
          <div className="imgView">
            <img src={require("../../assets/icons/orangeSetting.png")} alt="" />
          </div>
          <p>Movies List</p>
        </div>
      </a>
      <a href="/pass">
        <div
          onClick={() => handleClick(2)}
          className={selectedItem === 2 ? "selected" : ""}
        >
          <div className="imgView">
            <img src={require("../../assets/icons/orangeSetting.png")} alt="" />
          </div>
          <p>Add Movie</p>
        </div>
      </a>
      <a href="/login">
        <div
          onClick={() => handleClick(3)}
          className={selectedItem === 3 ? "selected" : ""}
        >
          <div className="imgView">
            <img src={require("../../assets/icons/orangeSetting.png")} alt="" />
          </div>
          <p>Categorires</p>
        </div>
      </a>
      <a href="/login">
        <div
          onClick={() => handleClick(3)}
          className={selectedItem === 3 ? "selected" : ""}
        >
          <div className="imgView">
            <img src={require("../../assets/icons/orangeSetting.png")} alt="" />
          </div>
          <p>Users</p>
        </div>
      </a>
      <a href="/login">
        <div
          onClick={() => handleClick(3)}
          className={selectedItem === 3 ? "selected" : ""}
        >
          <div className="imgView">
            <img src={require("../../assets/icons/orangeSetting.png")} alt="" />
          </div>
          <p>Update Profile</p>
        </div>
      </a>
      <a href="/login">
        <div
          onClick={() => handleClick(3)}
          className={selectedItem === 3 ? "selected" : ""}
        >
          <div className="imgView">
            <img src={require("../../assets/icons/orangeSetting.png")} alt="" />
          </div>
          <p>Favorites Movies</p>
        </div>
      </a>
      <a href="/login">
        <div
          onClick={() => handleClick(3)}
          className={selectedItem === 3 ? "selected" : ""}
        >
          <div className="imgView">
            <img src={require("../../assets/icons/orangeSetting.png")} alt="" />
          </div>
          <p>Change Password</p>
        </div>
      </a>
      <a href="/login">
        <div
          onClick={() => handleClick(3)}
          className={selectedItem === 3 ? "selected" : ""}
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
