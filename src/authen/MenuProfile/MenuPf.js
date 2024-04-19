import React, { useState, useEffect } from "react";
import "./MenuPf.css";

export default function MenuPf() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index) => {
    setSelectedItem(index === selectedItem ? null : index);
  };

  return (
    <div id="menuPf">
      <a href="/profile">
        <div
          onClick={() => handleClick(0)}
          className={selectedItem === 0 ? "selected" : ""}
        >
          <div className="imgView">
            <img src={require("../../assets/icons/orangeSetting.png")} alt="" />
          </div>
          <p>Update Profile</p>
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
          <p>Favorites Movies</p>
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
