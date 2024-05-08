import React, { useState, useEffect } from "react";
import "./MenuPf.css";

export default function MenuPf() {
 
  const [selectedItem, setSelectedItem] = useState(null);


  const handleClick = (index) => {
    setSelectedItem(index);
    localStorage.setItem("selectedItem", index);
  };
const handleLogout = () => {
    localStorage.removeItem("token"); 
    window.location.href = "/login"; 
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
      case "/profile":
        setSelectedItem(0);
        break;
      case "/favorites":
        setSelectedItem(1);
        break;
        case "/pass":
          setSelectedItem(2);
        break;
        case "/login":
          setSelectedItem(3);
        break;
      
      default:
        break;
    }
  }, []);

  return (
    <div id="menuPf">
      <a href="/profile">
        <div
          onClick={() => handleClick(0)}
          className={selectedItem === 0 ? "selectedMenu" : ""}
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
          className={selectedItem === 1 ? "selectedMenu" : ""}
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
          className={selectedItem === 2 ? "selectedMenu" : ""}
        >
          <div className="imgView">
            <img src={require("../../assets/icons/orangeSetting.png")} alt="" />
          </div>
          <p>Change Password</p>
        </div>
      </a>
      <a href="/login">
        <div
          onClick={handleLogout}
          className={selectedItem === 3 ? "selectedMenu" : ""}
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
