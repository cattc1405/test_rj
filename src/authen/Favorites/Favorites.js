import React from "react";
import CustomHeader from "../../multiComponents/CustomHeader/CustomHeader";
import "./Favorites.css";
import MenuPf from "../MenuProfile/MenuPf";

export default function Favorites() {
  return (
    <div id="profileContainer">
      <div id="profileContent">
        <CustomHeader />
        <div id="profileMain">
          <MenuPf id="menuPf" />
          {/* <div id="rightMain"></div> */}
        </div>
      </div>
    </div>
  );
}
