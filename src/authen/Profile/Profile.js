import React, { useState, useEffect } from "react";
import CustomHeader from "../../multiComponents/CustomHeader/CustomHeader";
import "./Profile.css";
import MenuPf from "../MenuProfile/MenuPf";

export default function Profile() {
  const [isRightMainActive, setIsRightMainActive] = useState(false);

  useEffect(() => {
    setIsRightMainActive(true);
  }, []);

  return (
    <div id="profileContainer">
      <div id="profileContent">
        <CustomHeader />
        <div id="profileMain">
          <MenuPf id="menuPf" />
          <div id="rightMain" className={isRightMainActive ? "active" : ""}>
            <h1>Profile</h1>
            <div id="uploadAvtView">
              <div id="uploadAvatar">
                <img
                  src={require("./../../assets/icons/uploadred.png")}
                  alt=""
                />
                <h4>Drag your image here</h4>
                <i>only .jpg and .png files will be accepted</i>
              </div>
              <div id="avtLoaded">
                <img
                  src={require("./../../assets/images/avtIfNull.png")}
                  alt=""
                />
              </div>
            </div>

            <p>FullName</p>
            <input type="text" placeholder="Alex Thunder" />
            <p>Email</p>
            <input type="text" placeholder="...@gmail.com" />
            <div id="dltANDupdate">
              <button id="btnDelete">
                <p>Delete Account</p>
              </button>
              <button id="btnUpdate">
                <p>Update Profile</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
