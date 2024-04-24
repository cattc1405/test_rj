import React, { useState, useEffect } from "react";
import "./AddMovies.css";
import CustomHeader from "../../multiComponents/CustomHeader/CustomHeader";
import MenuAd from "../MenuAdmin/MenuAd";
import TableMovies from "../tableMovies/tableMovies";

export default function AddMovies() {
  const [isRightMainActive, setIsRightMainActive] = useState(false);

  useEffect(() => {
    setIsRightMainActive(true);
  }, []);

  return (
    <div id="addMvContainer">
      <div id="addMvContent">
        <CustomHeader />
        <div id="addMvMain">
          <MenuAd />
          <div
            id="rightMainAddMv"
            className={isRightMainActive ? "active" : ""}
          >
            <h1>Create Movies</h1>
            <div id="twoColumnsInRight">
              <div id="leftContent">
                <p>Recent Movies</p>
                <input type="text" placeholder="Movies title" />
                <p>Language Used</p>
                <input type="text" placeholder="endlish" />
                <p>Image Without Title</p>
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
              <div id="rightContent">
                <p>Hours</p>
                <input type="text" placeholder="Movies title" />
                <p>Year of Release</p>
                <input type="text" placeholder="endlish" />
                <p>Image With Title</p>
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
            </div>
            <p>Movies Description</p>
            <input type="text" placeholder="Movies title" />
            <p>Movies Category</p>

          </div>
        </div>
      </div>
    </div>
  );
}
