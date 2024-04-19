import React, { useState, useEffect } from "react";
import CustomHeader from "../../multiComponents/CustomHeader/CustomHeader";
import "./ChangePass.css";
import MenuPf from "../MenuProfile/MenuPf";

export default function ChangePass() {
  const [isRightMainActive, setIsRightMainActive] = useState(false);

  useEffect(() => {
    setIsRightMainActive(true);
  }, []);

  return (
    <div id="passContainer">
      <div id="passContent">
        <CustomHeader />
        <div id="passMain">
          <MenuPf id="menuPf" />
          <div id="rightPassMain" className={isRightMainActive ? "active" : ""}>
            <h1>Change Password</h1>
            <p>Previous Password</p>
            <input type="password" placeholder="*******" />
            <p>New Password</p>
            <input type="password" placeholder="*********" />
            <p>Confirm Password</p>
            <input type="password" placeholder="*********" />
            <div id="updatePassView">
              <button id="btnUpdatePass">
                <p>Change Password</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
